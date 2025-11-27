FROM golang:1.22-alpine AS builder

RUN apk add upx

WORKDIR /go/src/github.com/infinimesh/infinimesh
COPY go.mod go.sum ./
COPY third_party ./third_party
COPY . .
RUN GOPROXY=https://proxy.golang.org,direct go mod download
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -buildvcs=false ./cmd/web
RUN upx ./web

FROM scratch
WORKDIR /
COPY --from=builder /go/src/github.com/infinimesh/infinimesh/web /web

LABEL org.opencontainers.image.source="https://github.com/infinimesh/infinimesh"

ENTRYPOINT ["/web"]
