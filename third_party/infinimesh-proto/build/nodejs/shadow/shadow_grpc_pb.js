// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright © 2021-2022 Infinite Devices GmbH, Nikita Ivanovski info@slnt-opp.xyz
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var shadow_shadow_pb = require('../shadow/shadow_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_infinimesh_shadow_GetRequest(arg) {
  if (!(arg instanceof shadow_shadow_pb.GetRequest)) {
    throw new Error('Expected argument of type infinimesh.shadow.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_shadow_GetRequest(buffer_arg) {
  return shadow_shadow_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_shadow_GetResponse(arg) {
  if (!(arg instanceof shadow_shadow_pb.GetResponse)) {
    throw new Error('Expected argument of type infinimesh.shadow.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_shadow_GetResponse(buffer_arg) {
  return shadow_shadow_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_shadow_Shadow(arg) {
  if (!(arg instanceof shadow_shadow_pb.Shadow)) {
    throw new Error('Expected argument of type infinimesh.shadow.Shadow');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_shadow_Shadow(buffer_arg) {
  return shadow_shadow_pb.Shadow.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_shadow_StreamShadowRequest(arg) {
  if (!(arg instanceof shadow_shadow_pb.StreamShadowRequest)) {
    throw new Error('Expected argument of type infinimesh.shadow.StreamShadowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_shadow_StreamShadowRequest(buffer_arg) {
  return shadow_shadow_pb.StreamShadowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ShadowServiceService = exports.ShadowServiceService = {
  get: {
    path: '/infinimesh.shadow.ShadowService/Get',
    requestStream: false,
    responseStream: false,
    requestType: shadow_shadow_pb.GetRequest,
    responseType: shadow_shadow_pb.GetResponse,
    requestSerialize: serialize_infinimesh_shadow_GetRequest,
    requestDeserialize: deserialize_infinimesh_shadow_GetRequest,
    responseSerialize: serialize_infinimesh_shadow_GetResponse,
    responseDeserialize: deserialize_infinimesh_shadow_GetResponse,
  },
  patch: {
    path: '/infinimesh.shadow.ShadowService/Patch',
    requestStream: false,
    responseStream: false,
    requestType: shadow_shadow_pb.Shadow,
    responseType: shadow_shadow_pb.Shadow,
    requestSerialize: serialize_infinimesh_shadow_Shadow,
    requestDeserialize: deserialize_infinimesh_shadow_Shadow,
    responseSerialize: serialize_infinimesh_shadow_Shadow,
    responseDeserialize: deserialize_infinimesh_shadow_Shadow,
  },
  streamShadow: {
    path: '/infinimesh.shadow.ShadowService/StreamShadow',
    requestStream: false,
    responseStream: true,
    requestType: shadow_shadow_pb.StreamShadowRequest,
    responseType: shadow_shadow_pb.Shadow,
    requestSerialize: serialize_infinimesh_shadow_StreamShadowRequest,
    requestDeserialize: deserialize_infinimesh_shadow_StreamShadowRequest,
    responseSerialize: serialize_infinimesh_shadow_Shadow,
    responseDeserialize: deserialize_infinimesh_shadow_Shadow,
  },
};

exports.ShadowServiceClient = grpc.makeGenericClientConstructor(ShadowServiceService);
