#!/usr/bin/env bash
# =============================================================================
# generate-sdks.sh — Crescendo Universal SDK Generator
#
# Usage:
#   ./generate-sdks.sh [--version v1.2.3] [--spec-url http://localhost:8080/api-docs]
#
# What it does:
#   1. Fetches the OpenAPI spec from the running server (or a provided file)
#   2. Runs openapi-generator-cli for 6 languages
#   3. Stamps every package.json / pom.xml / etc. with the version
#
# Languages generated: Java, PHP, Go, Rust, Ruby, .NET (C#)
# Hand-written (NOT overwritten): Node.js (crescendo-sdk-node), Python (crescendo-sdk-python)
# cURL: Provided as hand-written examples in docs (not generated)
#
# Dependencies:
#   - npx / node
#   - curl
#   - @openapitools/openapi-generator-cli (auto-installed via npx)
# =============================================================================

set -euo pipefail

# ── Configuration ─────────────────────────────────────────────────────────────
SPEC_URL="${SPEC_URL:-http://localhost:8080/api-docs/crescendo-public-api-v1}"
API_VERSION="${API_VERSION:-1.0.0}"
SDK_DIR="$(cd "$(dirname "$0")" SDK_DIR="$(cd "$(dirname "$0")" && pwd)/sdk"SDK_DIR="$(cd "$(dirname "$0")" && pwd)/sdk" pwd)"
SPEC_DIR="$SDK_DIR/spec"
SPEC_FILE="$SPEC_DIR/openapi.json"
GENERATOR="npx --yes @openapitools/openapi-generator-cli"

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --version) API_VERSION="$2"; shift 2 ;;
    --spec-url) SPEC_URL="$2"; shift 2 ;;
    --spec-file) SPEC_FILE="$2"; shift 2 ;;
    *) echo "Unknown argument: $1"; exit 1 ;;
  esac
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Crescendo SDK Generator — v${API_VERSION}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# ── Step 1: Fetch OpenAPI spec ────────────────────────────────────────────────
mkdir -p "$SPEC_DIR"
if [[ -f "$SPEC_FILE" && "${SKIP_FETCH:-}" == "true" ]]; then
  echo "✓ Using cached spec at $SPEC_FILE"
else
  echo "→ Fetching spec from $SPEC_URL ..."
  curl -sS --max-time 15 "$SPEC_URL" -o "$SPEC_FILE"
  echo "✓ Spec saved to $SPEC_FILE"
fi

# Validate spec has expected paths + is scoped to public API only
if ! grep -q '"/api/v1/emails"' "$SPEC_FILE"; then
  echo "✗ ERROR: Spec missing /api/v1/emails — is the server running with the full API group?"
  exit 1
fi

# Path-count gate (must match CI gate in regenerate-sdks.yml)
PATH_COUNT=$(python3 -c "import json; d=json.load(open('$SPEC_FILE')); print(len(d.get('paths',{})))")
echo "→ Spec path count: $PATH_COUNT"
if [ "$PATH_COUNT" -gt 60 ]; then
  echo "✗ ERROR: Spec has $PATH_COUNT paths — expected ≤60 for the public API group."
  echo "  Check that SPEC_URL points to /api-docs/crescendo-public-api-v1 not the root /api-docs"
  exit 1
fi

# Banned-path check — internal paths that must NOT appear in the public spec
for BANNED in '"/admin' '"/settings' '"/guest/' '"/auth/' '"email/webhooks'; do
  if grep -q "$BANNED" "$SPEC_FILE"; then
    echo "✗ ERROR: Internal/legacy path $BANNED found in public spec"
    echo "  Check OpenApiConfig.packagesToScan and @Hidden annotations"
    exit 1
  fi
done
echo "✓ Spec validation passed ($PATH_COUNT paths, no banned paths)"

# ── Step 2: Generator helper ──────────────────────────────────────────────────
generate() {
  local lang="$1"
  local generator="$2"
  local outdir="$SDK_DIR/$3"
  shift 3
  local extra_args=("$@")

  echo ""
  echo "→ Generating $lang SDK → $outdir"
  rm -rf "$outdir"
  $GENERATOR generate \
    -i "$SPEC_FILE" \
    -g "$generator" \
    -o "$outdir" \
    --additional-properties="packageVersion=${API_VERSION}" \
    "${extra_args[@]}"
  echo "✓ $lang SDK generated"
}

# ── Step 3: Generate all 6 auto-generated SDKs ───────────────────────────────

generate "Java" java crescendo-java \
  --additional-properties="groupId=io.crescendo,artifactId=crescendo-java,artifactVersion=${API_VERSION},library=native,apiPackage=io.crescendo.api,modelPackage=io.crescendo.model,invokerPackage=io.crescendo,useJakartaEe=true,java8=false"

generate "PHP" php crescendo-php \
  --additional-properties="composerPackageName=crescendo/crescendo-php,invokerPackage=Crescendo"

generate "Go" go crescendo-go \
  --additional-properties="packageName=crescendo,moduleName=github.com/AnkitArsh19/crescendo-go,packageVersion=${API_VERSION}" \
  --git-user-id AnkitArsh19 \
  --git-repo-id crescendo-go

generate "Rust" rust crescendo-rust \
  --additional-properties="packageName=crescendo,packageVersion=${API_VERSION},edition=2024"

generate "Ruby" ruby crescendo-ruby \
  --additional-properties="gemName=crescendo,moduleName=Crescendo,gemVersion=${API_VERSION}"

generate ".NET (C#)" csharp crescendo-dotnet \
  --additional-properties="packageName=Crescendo,packageVersion=${API_VERSION},targetFramework=net10.0"

# ── Step 4: Post-generation cleanup ──────────────────────────────────────────
# The generator rewrites .openapi-generator-ignore itself, so cleanup that
# can't be done via ignore rules is applied here instead.

echo ""
echo "Running post-generation cleanup..."

# Java: drop Gradle build files (we keep Maven / pom.xml only)
rm -f crescendo-java/build.gradle \
      crescendo-java/build.gradle.kts \
      crescendo-java/settings.gradle \
      crescendo-java/gradlew \
      crescendo-java/gradlew.bat
echo "  ✓ Java: Gradle files removed (Maven/pom.xml kept)"

# Rust: generator hardcodes edition = "2021" regardless of config;
# patch it to edition = "2024" (the latest stable edition as of 2025).
if [ -f crescendo-rust/Cargo.toml ]; then
  sed -i '' 's/edition = "2021"/edition = "2024"/' crescendo-rust/Cargo.toml
  echo "  ✓ Rust: edition bumped to 2024"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  All 6 SDKs generated successfully!"
echo ""
echo "  ⚠  RUST SDK: Manually review crescendo-rust/src/apis/"
echo "     before publishing to crates.io — the rust generator"
echo "     has historically produced inconsistent output quality."
echo ""
echo "  NOT generated (hand-written — do not overwrite):"
echo "    crescendo-sdk-node   (Node.js / TypeScript)"
echo "    crescendo-sdk-python (Python)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
