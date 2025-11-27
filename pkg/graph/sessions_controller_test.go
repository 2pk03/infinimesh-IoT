package graph

import (
	"context"
	"testing"

	"connectrpc.com/connect"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"go.uber.org/zap"
	"google.golang.org/protobuf/types/known/timestamppb"

	"github.com/infinimesh/proto/node"
	sesspb "github.com/infinimesh/proto/node/sessions"
	inf "github.com/infinimesh/infinimesh/pkg/shared"
)

type stubSessions struct {
	getSessions   []*sesspb.Session
	getActivity   map[string]*timestamppb.Timestamp
	revokeErr     error
	getErr        error
	getActivityErr error
}

func (s *stubSessions) New(exp int64, client string) *sesspb.Session { return nil }
func (s *stubSessions) Store(account string, session *sesspb.Session) error { return nil }
func (s *stubSessions) Check(account, sid string) error                    { return nil }
func (s *stubSessions) LogActivity(account, sid string, exp int64) error   { return nil }
func (s *stubSessions) Get(account string) ([]*sesspb.Session, error) {
	return s.getSessions, s.getErr
}
func (s *stubSessions) GetActivity(account string) (map[string]*timestamppb.Timestamp, error) {
	return s.getActivity, s.getActivityErr
}
func (s *stubSessions) Revoke(account, sid string) error { return s.revokeErr }

func newSessionsControllerForTest(stub *stubSessions) *SessionsController {
	ctrl := NewSessionsController(zap.NewExample(), nil)
	ctrl.sessions = stub
	return ctrl
}

func ctxWithAccount(account, session string) context.Context {
	ctx := context.WithValue(context.Background(), inf.InfinimeshAccountCtxKey, account)
	ctx = context.WithValue(ctx, inf.InfinimeshSessionCtxKey, session)
	return ctx
}

func TestSessionsController_Get(t *testing.T) {
	stub := &stubSessions{
		getSessions: []*sesspb.Session{{Id: "sid", Client: "cli"}},
	}
	ctrl := newSessionsControllerForTest(stub)

	resp, err := ctrl.Get(ctxWithAccount("acc", "sid"), connect.NewRequest(&node.EmptyMessage{}))
	require.NoError(t, err)
	assert.Len(t, resp.Msg.Sessions, 1)
	assert.Equal(t, "sid", resp.Msg.Sessions[0].Id)
	assert.True(t, *resp.Msg.Sessions[0].Current)
}

func TestSessionsController_GetActivity(t *testing.T) {
	now := timestamppb.Now()
	stub := &stubSessions{
		getActivity: map[string]*timestamppb.Timestamp{"sid": now},
	}
	ctrl := newSessionsControllerForTest(stub)

	resp, err := ctrl.GetActivity(ctxWithAccount("acc", "sid"), connect.NewRequest(&node.EmptyMessage{}))
	require.NoError(t, err)
	assert.Equal(t, now, resp.Msg.LastSeen["sid"])
}

func TestSessionsController_Revoke(t *testing.T) {
	ctrl := newSessionsControllerForTest(&stubSessions{})
	_, err := ctrl.Revoke(ctxWithAccount("acc", "sid"), connect.NewRequest(&sesspb.Session{Id: "sid"}))
	assert.NoError(t, err)
}
