FROM golang:1.20-alpine AS builder

RUN apk add upx

WORKDIR /go/src/github.com/infinimesh/infinimesh
COPY go.mod go.sum ./
COPY third_party ./third_party
RUN GOPROXY=https://proxy.golang.org,direct go mod download

COPY . .
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -buildvcs=false ./cmd/web
RUN upx ./web

FROM scratch
WORKDIR /
COPY --from=builder /go/src/github.com/infinimesh/infinimesh/web /web

LABEL org.opencontainers.image.source="https://github.com/infinimesh/infinimesh"

ENTRYPOINT ["/web"]
