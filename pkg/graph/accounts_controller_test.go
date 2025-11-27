package graph

import (
	"context"
	"testing"

	"connectrpc.com/connect"
	"github.com/stretchr/testify/assert"
	"go.uber.org/zap"

	inf "github.com/infinimesh/infinimesh/pkg/shared"
	accpb "github.com/infinimesh/proto/node/accounts"
	"github.com/infinimesh/proto/node/access"
)

func TestAccountsController_Get_AllowsRead(t *testing.T) {
	ctrl := &AccountsController{
		InfinimeshBaseController: InfinimeshBaseController{
			log: zap.NewExample(),
		},
		ica_repo: fakeICARepo{accessLevel: access.Level_READ, accessOK: true},
	}

	ctx := context.WithValue(context.Background(), inf.InfinimeshAccountCtxKey, "requestor")
	resp, err := ctrl.Get(ctx, connect.NewRequest(&accpb.Account{Uuid: "target"}))
	assert.NoError(t, err)
	assert.Equal(t, "target", resp.Msg.Uuid)
}

func TestAccountsController_Get_DeniesLowAccess(t *testing.T) {
	ctrl := &AccountsController{
		InfinimeshBaseController: InfinimeshBaseController{
			log: zap.NewExample(),
		},
		ica_repo: fakeICARepo{accessLevel: access.Level_NONE, accessOK: true},
	}

	ctx := context.WithValue(context.Background(), inf.InfinimeshAccountCtxKey, "requestor")
	_, err := ctrl.Get(ctx, connect.NewRequest(&accpb.Account{Uuid: "target"}))
	assert.Error(t, err)
}
