# Crescendo Universal SDKs

This repository contains the official SDKs for interacting with the **Crescendo Public API**.

## Available SDKs

### Auto-Generated SDKs
These SDKs are automatically generated from our OpenAPI specification using the `openapi-generator-cli`. They are kept up-to-date with every backend release.

* [Java](crescendo-java)
* [Go](crescendo-go)
* [PHP](crescendo-php)
* [Ruby](crescendo-ruby)
* [Rust](crescendo-rust)
* [.NET (C#)](crescendo-dotnet)

### Hand-written SDKs
These SDKs provide a premium, hand-crafted developer experience for our core audiences.

* [Node.js (TypeScript)](crescendo-sdk-node)
* [Python](crescendo-sdk-python)

## How Generation Works

This repository is completely automated via GitHub Actions:
1. Whenever the `crescendo-backend` public API surface changes, its CI pipeline automatically publishes a new `openapi.json` spec.
2. The backend then triggers a `repository_dispatch` event to this repository.
3. Our GitHub Action (`.github/workflows/regenerate-sdks.yml`) downloads the latest spec, runs `./generate-sdks.sh` to update all 6 auto-generated SDKs, and commits the changes back to this repo automatically.

*(Note: The hand-written Node.js and Python SDKs are unaffected by the generator.)*
