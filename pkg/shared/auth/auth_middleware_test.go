package auth

import (
	"context"
	"testing"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"github.com/stretchr/testify/assert"
	"go.uber.org/zap"

	infinimesh "github.com/infinimesh/infinimesh/pkg/shared"
	sesspb "github.com/infinimesh/proto/node/sessions"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type dummySessions struct {
	checkErr error
	checked  bool
}

func (d *dummySessions) New(exp int64, client string) *sesspb.Session { return &sesspb.Session{} }
func (d *dummySessions) Store(account string, session *sesspb.Session) error {
	return nil
}
func (d *dummySessions) Check(account, sid string) error {
	d.checked = true
	return d.checkErr
}
func (d *dummySessions) LogActivity(account, sid string, exp int64) error { return nil }
func (d *dummySessions) Get(account string) ([]*sesspb.Session, error)   { return nil, nil }
func (d *dummySessions) GetActivity(account string) (map[string]*timestamppb.Timestamp, error) {
	return map[string]*timestamppb.Timestamp{}, nil
}
func (d *dummySessions) Revoke(account, sid string) error { return nil }

type stubJWT struct {
	claims jwt.MapClaims
	err    error
}

func (s stubJWT) Parse(tokenString string, keyFunc jwt.Keyfunc, options ...jwt.ParserOption) (*jwt.Token, error) {
	if s.err != nil {
		return nil, s.err
	}
	return &jwt.Token{Valid: true, Claims: s.claims}, nil
}

func TestConnectStandardAuthMiddleware_SessionOK(t *testing.T) {
	claims := jwt.MapClaims{
		infinimesh.INFINIMESH_ACCOUNT_CLAIM: "acc",
		infinimesh.INFINIMESH_SESSION_CLAIM: "sid",
		"exp":                               float64(time.Now().Add(time.Hour).Unix()),
		infinimesh.INFINIMESH_ROOT_CLAIM:    true,
	}
	sess := &dummySessions{}
	interceptor := &interceptor{
		log:         zap.NewNop(),
		jwt:         stubJWT{claims: claims},
		sessions:    sess,
		signing_key: []byte("k"),
	}

	ctx, logActivity, err := interceptor.ConnectStandardAuthMiddleware(context.Background(), []byte("k"), "stub-token")
	assert.NoError(t, err)
	assert.True(t, logActivity)
	assert.True(t, sess.checked)
	assert.Equal(t, "acc", ctx.Value(infinimesh.InfinimeshAccountCtxKey))
	assert.Equal(t, "sid", ctx.Value(infinimesh.InfinimeshSessionCtxKey))
	assert.Equal(t, true, ctx.Value(infinimesh.InfinimeshRootCtxKey))
}

func TestConnectStandardAuthMiddleware_NoSessionFlag(t *testing.T) {
	claims := jwt.MapClaims{
		infinimesh.INFINIMESH_ACCOUNT_CLAIM:   "acc",
		infinimesh.INFINIMESH_NOSESSION_CLAIM: true,
		"exp":                                 float64(time.Now().Add(time.Hour).Unix()),
	}
	sess := &dummySessions{}
	interceptor := &interceptor{
		log:         zap.NewNop(),
		jwt:         stubJWT{claims: claims},
		sessions:    sess,
		signing_key: []byte("k"),
	}

	_, logActivity, err := interceptor.ConnectStandardAuthMiddleware(context.Background(), []byte("k"), "stub-token")
	assert.NoError(t, err)
	assert.False(t, logActivity)
	assert.False(t, sess.checked)
}

func TestConnectStandardAuthMiddleware_SessionCheckFails(t *testing.T) {
	claims := jwt.MapClaims{
		infinimesh.INFINIMESH_ACCOUNT_CLAIM: "acc",
		infinimesh.INFINIMESH_SESSION_CLAIM: "sid",
		"exp":                               float64(time.Now().Add(time.Hour).Unix()),
	}
	sess := &dummySessions{checkErr: assert.AnError}
	interceptor := &interceptor{
		log:         zap.NewNop(),
		jwt:         stubJWT{claims: claims},
		sessions:    sess,
		signing_key: []byte("k"),
	}

	_, _, err := interceptor.ConnectStandardAuthMiddleware(context.Background(), []byte("k"), "stub-token")
	assert.Error(t, err)
	assert.True(t, sess.checked)
}
