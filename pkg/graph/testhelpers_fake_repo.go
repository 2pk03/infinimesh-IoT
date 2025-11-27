package graph

import (
	"context"

	"github.com/arangodb/go-driver"
	"github.com/go-redis/redis/v8"
	"go.uber.org/zap"

	"github.com/infinimesh/proto/node/access"
)

// fakeICARepo is a lightweight InfinimeshCommonActionsRepo stub used in controller tests.
// It only populates Access on nodes and otherwise returns static responses.
type fakeICARepo struct {
	accessLevel access.Level
	accessOK    bool
}

func (f fakeICARepo) GetEdgeCol(ctx context.Context, name string) driver.Collection { return nil }
func (f fakeICARepo) CheckLink(ctx context.Context, edge driver.Collection, from InfinimeshGraphNode, to InfinimeshGraphNode) bool {
	return false
}
func (f fakeICARepo) Link(ctx context.Context, log *zap.Logger, edge driver.Collection, from InfinimeshGraphNode, to InfinimeshGraphNode, lvl access.Level, role access.Role) error {
	return nil
}
func (f fakeICARepo) Move(ctx context.Context, c InfinimeshController, obj InfinimeshGraphNode, edge driver.Collection, ns string) error {
	return nil
}
func (f fakeICARepo) AccessLevel(ctx context.Context, requestor InfinimeshGraphNode, node InfinimeshGraphNode) (bool, access.Level) {
	return f.accessOK, f.accessLevel
}
func (f fakeICARepo) AccessLevelAndGet(ctx context.Context, log *zap.Logger, account *Account, node InfinimeshGraphNode) error {
	switch n := node.(type) {
	case *Account:
		n.SetAccessLevel(f.accessLevel)
	case *Namespace:
		n.SetAccessLevel(f.accessLevel)
	case *Device:
		n.SetAccessLevel(f.accessLevel)
	}
	return nil
}
func (f fakeICARepo) ListQuery(ctx context.Context, log *zap.Logger, from InfinimeshGraphNode, children string) (driver.Cursor, error) {
	return nil, nil
}
func (f fakeICARepo) ListOwnedDeep(ctx context.Context, log *zap.Logger, from InfinimeshGraphNode) (*access.Nodes, error) {
	return nil, nil
}
func (f fakeICARepo) DeleteRecursive(ctx context.Context, log *zap.Logger, from InfinimeshGraphNode) error {
	return nil
}
func (f fakeICARepo) Toggle(ctx context.Context, node InfinimeshGraphNode, field string) error { return nil }
func (f fakeICARepo) EnsureRootExists(_log *zap.Logger, rdb *redis.Client, passwd string) error   { return nil }
