# infinimesh proto (vendored)

This directory vendors the `github.com/infinimesh/proto` module. `go.mod` uses:

```
replace github.com/infinimesh/proto => ./third_party/infinimesh-proto
```

so builds/tests/Docker runs do **not** fetch proto code from a remote.

## Editing the schema

1. Ensure tooling is installed (used by `buf generate`):
   - `buf` CLI
   - `protoc-gen-go`, `protoc-gen-go-grpc`
   - `protoc-gen-connect-go`
   - `protoc-gen-grpc-gateway`, `protoc-gen-openapiv2`
2. From this directory:
   ```bash
   buf mod update      # fetch buf deps (googleapis, grpc-gateway)
   buf generate        # regenerate Go/grpc/connect/openapi code
   ```
3. Commit proto changes **and** regenerated Go code under this folder.

Note: The schemas here were adjusted to match the current application code (additional fields/services), so do not overwrite with older upstream snapshots without reconciling those deltas.
