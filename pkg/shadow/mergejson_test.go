package shadow

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMergeJSON_Basic(t *testing.T) {
	old := []byte(`{"a":1}`)
	newer := []byte(`{"b":2}`)

	out, err := MergeJSON(old, newer)
	assert.NoError(t, err)
	assert.JSONEq(t, `{"a":1,"b":2}`, string(out))
}

func TestMergeJSON_EmptyOld(t *testing.T) {
	out, err := MergeJSON([]byte(""), []byte(`{"b":2}`))
	assert.NoError(t, err)
	assert.JSONEq(t, `{"b":2}`, string(out))
}

func TestMergeJSON_EmptyNew(t *testing.T) {
	out, err := MergeJSON([]byte(`{"a":1}`), []byte(""))
	assert.NoError(t, err)
	assert.JSONEq(t, `{"a":1}`, string(out))
}
