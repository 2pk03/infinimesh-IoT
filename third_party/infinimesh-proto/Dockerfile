FROM bufbuild/buf:latest as buf

FROM golang:1.18-alpine AS builder

COPY --from=buf /usr/local/bin/buf /usr/local/bin/buf

WORKDIR /go/bin

RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest \
    github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@latest

WORKDIR /go/src/github.com/infinimesh/proto
COPY go.mod go.sum ./
RUN go mod download

COPY buf.* ./

RUN buf mod update

LABEL org.opencontainers.image.source https://github.com/infinimesh/proto

ENTRYPOINT [ "buf", "generate" ]