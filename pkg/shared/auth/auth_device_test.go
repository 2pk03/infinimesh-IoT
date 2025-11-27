package auth

import (
	"context"
	"testing"

	"github.com/golang-jwt/jwt/v4"
	"github.com/stretchr/testify/assert"
	"go.uber.org/zap"

	"github.com/infinimesh/proto/node/access"
	infinimesh "github.com/infinimesh/infinimesh/pkg/shared"
)

func TestConnectDeviceAuthMiddleware_InjectsDevicesScope(t *testing.T) {
	claims := jwt.MapClaims{
		infinimesh.INFINIMESH_DEVICES_CLAIM: map[string]interface{}{
			"d1": float64(access.Level_READ),
			"d2": float64(access.Level_ADMIN),
		},
	}
	interceptor := &interceptor{
		log:         zap.NewNop(),
		jwt:         stubJWT{claims: claims},
		signing_key: []byte("k"),
	}

	ctx, logActivity, err := interceptor.ConnectDeviceAuthMiddleware(context.Background(), []byte("k"), "t")
	assert.NoError(t, err)
	assert.False(t, logActivity)

	devices := ctx.Value(infinimesh.InfinimeshDevicesCtxKey).(map[string]access.Level)
	assert.Equal(t, access.Level_READ, devices["d1"])
	assert.Equal(t, access.Level_ADMIN, devices["d2"])
}
