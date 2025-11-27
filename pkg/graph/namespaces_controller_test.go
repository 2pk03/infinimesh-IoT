package graph

import (
	"context"
	"testing"

	"connectrpc.com/connect"
	"github.com/stretchr/testify/assert"
	"go.uber.org/zap"

	inf "github.com/infinimesh/infinimesh/pkg/shared"
	nspb "github.com/infinimesh/proto/node/namespaces"
	"github.com/infinimesh/proto/node/access"
)

func TestNamespacesController_Get_AllowsRead(t *testing.T) {
	ctrl := &NamespacesController{
		log: zap.NewExample(),
		ica: fakeICARepo{accessLevel: access.Level_READ, accessOK: true},
	}

	ctx := context.WithValue(context.Background(), inf.InfinimeshAccountCtxKey, "acc")
	resp, err := ctrl.Get(ctx, connect.NewRequest(&nspb.Namespace{Uuid: "ns"}))
	assert.NoError(t, err)
	assert.Equal(t, "ns", resp.Msg.Uuid)
}

func TestNamespacesController_Get_DeniesLowAccess(t *testing.T) {
	ctrl := &NamespacesController{
		log: zap.NewExample(),
		ica: fakeICARepo{accessLevel: access.Level_NONE, accessOK: true},
	}

	ctx := context.WithValue(context.Background(), inf.InfinimeshAccountCtxKey, "acc")
	_, err := ctrl.Get(ctx, connect.NewRequest(&nspb.Namespace{Uuid: "ns"}))
	assert.Error(t, err)
}
