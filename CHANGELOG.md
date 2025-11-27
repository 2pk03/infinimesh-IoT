# Changelog

All notable changes to this project will be documented in this file.

## [v2.5.2] - 2025-11-27

### Added
- Vendored protobufs in `third_party/infinimesh-proto` with local regeneration instructions and Connect/grpc/OpenAPI outputs.
- New GitHub workflows: tag-only Docker builds, Swagger Pages publishing, and release publishing from changelog.
- Expanded test coverage for auth middleware, sessions controller, devices token issuance, MQTT bridge helpers, and shadow JSON merge.
- Fake repo helpers to unit test access-controlled controllers without a database.

### Changed
- README updated to reflect the current platform description, local proto usage, and build/test guidance.
- TLS setup in web gateway now supports custom CA and enforces verification.
- Redis session activity uses `SCAN` instead of `KEYS` to avoid blocking and handles empty results.

### Fixed
- OAuth provider handler now returns proper status on marshal errors.
- Root claim handling now uses boolean values so privileged tokens work as intended.
- Swagger Pages workflow now passes `GITHUB_TOKEN` to actions.

[v2.5.2]: https://github.com/2pk03/infinimesh-IoT/releases/tag/v2.5.2
