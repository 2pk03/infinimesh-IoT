package graph

import (
	"context"
	"testing"
	"time"

	"connectrpc.com/connect"
	"github.com/arangodb/go-driver"
	"github.com/go-redis/redis/v8"
	"github.com/golang-jwt/jwt/v4"
	"github.com/stretchr/testify/assert"
	"go.uber.org/zap"

	"github.com/infinimesh/infinimesh/pkg/graph/schema"
	inf "github.com/infinimesh/infinimesh/pkg/shared"
	"github.com/infinimesh/proto/node/access"
	pb "github.com/infinimesh/proto/node"
)

type fakeICA struct {
	ok    bool
	level access.Level
}

func (f fakeICA) GetEdgeCol(ctx context.Context, name string) driver.Collection { return nil }
func (f fakeICA) CheckLink(ctx context.Context, edge driver.Collection, from InfinimeshGraphNode, to InfinimeshGraphNode) bool {
	return false
}
func (f fakeICA) Link(ctx context.Context, log *zap.Logger, edge driver.Collection, from InfinimeshGraphNode, to InfinimeshGraphNode, lvl access.Level, role access.Role) error {
	return nil
}
func (f fakeICA) Move(ctx context.Context, c InfinimeshController, obj InfinimeshGraphNode, edge driver.Collection, ns string) error {
	return nil
}
func (f fakeICA) AccessLevel(ctx context.Context, requestor InfinimeshGraphNode, node InfinimeshGraphNode) (bool, access.Level) {
	return f.ok, f.level
}
func (f fakeICA) AccessLevelAndGet(ctx context.Context, log *zap.Logger, account *Account, node InfinimeshGraphNode) error {
	return nil
}
func (f fakeICA) ListQuery(ctx context.Context, log *zap.Logger, from InfinimeshGraphNode, children string) (driver.Cursor, error) {
	return nil, nil
}
func (f fakeICA) ListOwnedDeep(ctx context.Context, log *zap.Logger, from InfinimeshGraphNode) (*access.Nodes, error) {
	return nil, nil
}
func (f fakeICA) DeleteRecursive(ctx context.Context, log *zap.Logger, from InfinimeshGraphNode) error {
	return nil
}
func (f fakeICA) Toggle(ctx context.Context, node InfinimeshGraphNode, field string) error { return nil }
func (f fakeICA) EnsureRootExists(_log *zap.Logger, rdb *redis.Client, passwd string) error   { return nil }

func TestMakeDevicesToken_Success(t *testing.T) {
	ctrl := &DevicesController{
		InfinimeshBaseController: InfinimeshBaseController{
			log: zap.NewExample(),
			db:  nil,
		},
		ica_repo:   fakeICA{ok: true, level: access.Level_ADMIN},
		SIGNING_KEY: []byte("secret"),
	}

	ctx := context.WithValue(context.Background(), inf.InfinimeshAccountCtxKey, schema.ROOT_ACCOUNT_KEY)
	req := &pb.DevicesTokenRequest{
		Devices: map[string]access.Level{
			"dev1": access.Level_READ,
		},
		Exp: time.Now().Add(time.Hour).Unix(),
	}

	resp, err := ctrl.MakeDevicesToken(ctx, connect.NewRequest(req))
	assert.NoError(t, err)
	assert.NotEmpty(t, resp.Msg.GetToken())

	parsed, err := jwt.Parse(resp.Msg.GetToken(), func(tk *jwt.Token) (interface{}, error) {
		return ctrl.SIGNING_KEY, nil
	})
	assert.NoError(t, err)
	assert.True(t, parsed.Valid)
}

func TestMakeDevicesToken_NotEnoughAccess(t *testing.T) {
	ctrl := &DevicesController{
		InfinimeshBaseController: InfinimeshBaseController{
			log: zap.NewExample(),
			db:  nil,
		},
		ica_repo:   fakeICA{ok: false, level: access.Level_NONE},
		SIGNING_KEY: []byte("secret"),
	}

	ctx := context.WithValue(context.Background(), inf.InfinimeshAccountCtxKey, schema.ROOT_ACCOUNT_KEY)
	req := &pb.DevicesTokenRequest{
		Devices: map[string]access.Level{
			"dev1": access.Level_READ,
		},
	}

	_, err := ctrl.MakeDevicesToken(ctx, connect.NewRequest(req))
	assert.Error(t, err)
}
