#!/usr/bin/env bash
# =============================================================================
# smoke-test-sdks.sh — Build & smoke-test all generated Crescendo SDKs
#
# Run after generate-sdks.sh. Each language must compile with zero errors.
# Failures print the last 40 lines of the build log for diagnosis.
# =============================================================================

set -euo pipefail
SDK_DIR="$(cd "$(dirname "$0")" && pwd)/sdk"
LOG_DIR="$SDK_DIR/.smoke-logs"
mkdir -p "$LOG_DIR"
PASS=0; FAIL=0; SKIP=0

run_test() {
  local name="$1"; local dir="$2"; shift 2
  local cmd=("$@")
  local log="$LOG_DIR/${dir}.log"

  if [ ! -d "$SDK_DIR/$dir" ]; then
    echo "⏭  SKIP  $name (not generated yet)"
    ((SKIP++)) || true; return
  fi
  echo -n "→ Testing $name ... "
  if (cd "$SDK_DIR/$dir" && "${cmd[@]}" >"$log" 2>&1); then
    echo "✓ PASS"; ((PASS++)) || true
  else
    echo "✗ FAIL  (log: $log)"
    echo "--- last 40 lines ---"
    tail -n 40 "$log" || true
    echo "---------------------"
    ((FAIL++)) || true
  fi
}

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Crescendo SDK Smoke Tests"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Java — full compile
run_test "Java"     crescendo-java    mvn compile -q

# PHP — dependency install + syntax check all generated files
run_test "PHP"      crescendo-php     sh -c "composer install --no-interaction -q && find . -name '*.php' -not -path './vendor/*' | xargs php -l | grep -v 'No syntax errors' | head -20; [ \$(find . -name '*.php' -not -path './vendor/*' | xargs php -l 2>&1 | grep -c 'error') -eq 0 ]"

# Go — full build
run_test "Go"       crescendo-go      go build ./...

# Rust — full build (⚠ review output quality manually before publishing)
run_test "Rust"     crescendo-rust    cargo build --quiet

# Ruby — install gems + load check (catches broken generated .rb syntax)
run_test "Ruby"     crescendo-ruby    sh -c "bundle install --quiet && ruby -Ilib -e \"require 'crescendo'\""

# .NET — full Release build
run_test "C#/.NET"  crescendo-dotnet  dotnet build -c Release --nologo -q

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Results: ${PASS} passed, ${FAIL} failed, ${SKIP} skipped"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ "$FAIL" -gt 0 ]; then exit 1; fi
