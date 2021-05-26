//--------------------------------------------------------------------------
// Copyright 2018 Infinite Devices GmbH
// www.infinimesh.io
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//--------------------------------------------------------------------------

package s3merger

/*
import (
	"context"
	"fmt"
	"testing"

	"github.com/infinimesh/infinimesh/pkg/s3merger/s3mergerpb"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc"
)

var (
	stateClient s3mergerpb.S3ReposClient
)

func init() {
	conn, err := grpc.Dial("localhost:8084", grpc.WithInsecure())
	if err != nil {
		panic(err)
	}
	stateClient = s3mergerpb.NewS3ReposClient(conn)
}

func TestSetGet(t *testing.T) {
	// gRPC client usage
	response, err := stateClient.SetDeviceState(context.TODO(), &s3mergerpb.SaveDeviceStateRequest{Bucket: "0x1",
		Key:         "0x1",
		DeviceState: nil})
	require.NoError(t, err)
	fmt.Println("device status updated", response.GetStatus())
}
*/