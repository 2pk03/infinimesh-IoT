package main

import (
	"encoding/base64"
	"testing"

	"github.com/slntopp/mqtt-go/packet"
	"github.com/stretchr/testify/assert"
)

func TestVerifyBasicAuth(t *testing.T) {
	user := "user"
	pass := []byte{0x01, 0x02}
	payload := base64.StdEncoding.EncodeToString(pass)
	p := &packet.ConnectControlPacket{
		ConnectPayload: packet.ConnectPayload{
			Username: user,
			Password: payload,
		},
	}
	fp, err := verifyBasicAuth(p)
	assert.NoError(t, err)
	assert.Equal(t, pass, fp)
}

func TestVerifyBasicAuth_MissingFields(t *testing.T) {
	p := &packet.ConnectControlPacket{}
	_, err := verifyBasicAuth(p)
	assert.Error(t, err)
}

func TestGetFingerprint(t *testing.T) {
	data := []byte("hello")
	fp := getFingerprint(data)
	assert.Len(t, fp, 32)
}
