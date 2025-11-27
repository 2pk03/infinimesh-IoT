package cmd

import (
	"context"
	"net"
	"testing"

	pb "github.com/infinimesh/proto/node"
	"github.com/infinimesh/proto/node/access"
	"github.com/spf13/viper"
	"google.golang.org/grpc"
)

type mockDevicesServer struct {
	pb.UnimplementedDevicesServiceServer
	last map[string]access.Level
}

func (s *mockDevicesServer) MakeDevicesToken(ctx context.Context, req *pb.DevicesTokenRequest) (*pb.TokenResponse, error) {
	s.last = req.Devices
	return &pb.TokenResponse{Token: "ok"}, nil
}

func TestMakeDevicesTokenUsesAccessMap(t *testing.T) {
	viper.Reset()

	lis, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		t.Fatalf("listen: %v", err)
	}
	srv := grpc.NewServer()
	mock := &mockDevicesServer{}
	pb.RegisterDevicesServiceServer(srv, mock)
	go srv.Serve(lis)
	t.Cleanup(func() {
		srv.Stop()
		_ = lis.Close()
	})

	viper.Set("infinimesh", lis.Addr().String())
	viper.Set("insecure", true)
	viper.Set("token", "test-token")

	if err := makeDeviceTokenCmd.RunE(makeDeviceTokenCmd, []string{"dev-one", "dev-two"}); err != nil {
		t.Fatalf("run make device token: %v", err)
	}

	if mock.last == nil {
		t.Fatalf("server did not receive request")
	}
	if len(mock.last) != 2 {
		t.Fatalf("expected 2 devices, got %d", len(mock.last))
	}
	if mock.last["dev-one"] != access.Level_NONE {
		t.Fatalf("expected dev-one to default to NONE, got %v", mock.last["dev-one"])
	}
	if mock.last["dev-two"] != access.Level_NONE {
		t.Fatalf("expected dev-two to default to NONE, got %v", mock.last["dev-two"])
	}
}
