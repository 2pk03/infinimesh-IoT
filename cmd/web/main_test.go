package main

import (
	"crypto/tls"
	"path/filepath"
	"runtime"
	"testing"

	"go.uber.org/zap/zaptest"
)

func TestBuildTLSConfigInsecure(t *testing.T) {
	cfg, err := buildTLSConfig(false, "", zaptest.NewLogger(t))
	if err != nil {
		t.Fatalf("expected no error, got %v", err)
	}
	if cfg != nil {
		t.Fatalf("expected nil config when secure is disabled, got %+v", cfg)
	}
}

func TestBuildTLSConfigWithCA(t *testing.T) {
	_, filename, _, ok := runtime.Caller(0)
	if !ok {
		t.Fatal("failed to get caller info")
	}
	caPath := filepath.Join(filepath.Dir(filename), "..", "..", "hack", "server.crt")

	cfg, err := buildTLSConfig(true, caPath, zaptest.NewLogger(t))
	if err != nil {
		t.Fatalf("expected no error, got %v", err)
	}
	if cfg == nil {
		t.Fatal("expected tls config when secure is enabled")
	}
	if cfg.MinVersion != tls.VersionTLS12 {
		t.Fatalf("expected MinVersion TLS1.2, got %v", cfg.MinVersion)
	}
	if cfg.RootCAs == nil || len(cfg.RootCAs.Subjects()) == 0 {
		t.Fatal("expected RootCAs to be populated from provided CA file")
	}
}

func TestBuildTLSConfigMissingCA(t *testing.T) {
	_, err := buildTLSConfig(true, "does-not-exist.crt", zaptest.NewLogger(t))
	if err == nil {
		t.Fatal("expected error when CA file is missing")
	}
}
