package cmd

import (
	"context"
	"net"
	"path/filepath"
	"testing"

	pb "github.com/infinimesh/proto/node"
	"github.com/spf13/viper"
	"google.golang.org/grpc"
)

type mockAccountsServer struct {
	pb.UnimplementedAccountsServiceServer
}

func (s *mockAccountsServer) Token(ctx context.Context, req *pb.TokenRequest) (*pb.TokenResponse, error) {
	return &pb.TokenResponse{
		Token: "token-" + req.Auth.Data[0],
	}, nil
}

func TestLoginStoresContext(t *testing.T) {
	tempDir := t.TempDir()
	cfg := filepath.Join(tempDir, "config.yaml")

	// isolate viper/config for the test
	initialized = false
	cfgFile = cfg
	viper.Reset()
	initConfig()

	lis, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		t.Fatalf("listen: %v", err)
	}
	srv := grpc.NewServer()
	pb.RegisterAccountsServiceServer(srv, &mockAccountsServer{})
	go srv.Serve(lis)
	t.Cleanup(func() {
		srv.Stop()
		_ = lis.Close()
	})

	host := lis.Addr().String()

	if err := loginCmd.Flags().Set("api", host); err != nil {
		t.Fatalf("set api flag: %v", err)
	}
	if err := loginCmd.Flags().Set("username", "root"); err != nil {
		t.Fatalf("set username flag: %v", err)
	}
	if err := loginCmd.Flags().Set("password", "secret"); err != nil {
		t.Fatalf("set password flag: %v", err)
	}
	if err := loginCmd.Flags().Set("insecure", "true"); err != nil {
		t.Fatalf("set insecure flag: %v", err)
	}
	t.Cleanup(func() {
		_ = loginCmd.Flags().Set("api", "")
		_ = loginCmd.Flags().Set("username", "")
		_ = loginCmd.Flags().Set("password", "")
		_ = loginCmd.Flags().Set("insecure", "false")
	})

	if err := loginCmd.RunE(loginCmd, nil); err != nil {
		t.Fatalf("login run: %v", err)
	}

	if got := viper.GetString("infinimesh"); got != host {
		t.Fatalf("expected host %s, got %s", host, got)
	}
	if got := viper.GetString("token"); got != "token-root" {
		t.Fatalf("expected token token-root, got %s", got)
	}
	if !viper.GetBool("insecure") {
		t.Fatalf("expected insecure flag to persist")
	}
}

func TestNormalizeAPIHost(t *testing.T) {
	tests := []struct {
		in   string
		want string
	}{
		{"api.infinimesh.local", "api.infinimesh.local:8000"},
		{"api.infinimesh.local:9000", "api.infinimesh.local:9000"},
		{"http://api.infinimesh.local", "api.infinimesh.local:8000"},
		{"http://api.infinimesh.local:8080", "api.infinimesh.local:8080"},
	}
	for _, tt := range tests {
		got, err := normalizeAPIHost(tt.in)
		if err != nil {
			t.Fatalf("normalizeAPIHost(%q) returned error: %v", tt.in, err)
		}
		if got != tt.want {
			t.Fatalf("normalizeAPIHost(%q) = %q, want %q", tt.in, got, tt.want)
		}
	}
}
