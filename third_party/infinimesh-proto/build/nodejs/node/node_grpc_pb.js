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
'use strict';
var grpc = require('@grpc/grpc-js');
var node_node_pb = require('../node/node_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var node_accounts_accounts_pb = require('../node/accounts/accounts_pb.js');
var node_access_access_pb = require('../node/access/access_pb.js');
var node_namespaces_namespaces_pb = require('../node/namespaces/namespaces_pb.js');
var node_devices_devices_pb = require('../node/devices/devices_pb.js');
var shadow_shadow_pb = require('../shadow/shadow_pb.js');

function serialize_infinimesh_node_DeleteResponse(arg) {
  if (!(arg instanceof node_node_pb.DeleteResponse)) {
    throw new Error('Expected argument of type infinimesh.node.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_DeleteResponse(buffer_arg) {
  return node_node_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_DevicesTokenRequest(arg) {
  if (!(arg instanceof node_node_pb.DevicesTokenRequest)) {
    throw new Error('Expected argument of type infinimesh.node.DevicesTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_DevicesTokenRequest(buffer_arg) {
  return node_node_pb.DevicesTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_EmptyMessage(arg) {
  if (!(arg instanceof node_node_pb.EmptyMessage)) {
    throw new Error('Expected argument of type infinimesh.node.EmptyMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_EmptyMessage(buffer_arg) {
  return node_node_pb.EmptyMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_JoinRequest(arg) {
  if (!(arg instanceof node_node_pb.JoinRequest)) {
    throw new Error('Expected argument of type infinimesh.node.JoinRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_JoinRequest(buffer_arg) {
  return node_node_pb.JoinRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_SetCredentialsRequest(arg) {
  if (!(arg instanceof node_node_pb.SetCredentialsRequest)) {
    throw new Error('Expected argument of type infinimesh.node.SetCredentialsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_SetCredentialsRequest(buffer_arg) {
  return node_node_pb.SetCredentialsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_SetCredentialsResponse(arg) {
  if (!(arg instanceof node_node_pb.SetCredentialsResponse)) {
    throw new Error('Expected argument of type infinimesh.node.SetCredentialsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_SetCredentialsResponse(buffer_arg) {
  return node_node_pb.SetCredentialsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_TokenRequest(arg) {
  if (!(arg instanceof node_node_pb.TokenRequest)) {
    throw new Error('Expected argument of type infinimesh.node.TokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_TokenRequest(buffer_arg) {
  return node_node_pb.TokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_TokenResponse(arg) {
  if (!(arg instanceof node_node_pb.TokenResponse)) {
    throw new Error('Expected argument of type infinimesh.node.TokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_TokenResponse(buffer_arg) {
  return node_node_pb.TokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_access_Nodes(arg) {
  if (!(arg instanceof node_access_access_pb.Nodes)) {
    throw new Error('Expected argument of type infinimesh.node.access.Nodes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_access_Nodes(buffer_arg) {
  return node_access_access_pb.Nodes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_accounts_Account(arg) {
  if (!(arg instanceof node_accounts_accounts_pb.Account)) {
    throw new Error('Expected argument of type infinimesh.node.accounts.Account');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_accounts_Account(buffer_arg) {
  return node_accounts_accounts_pb.Account.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_accounts_Accounts(arg) {
  if (!(arg instanceof node_accounts_accounts_pb.Accounts)) {
    throw new Error('Expected argument of type infinimesh.node.accounts.Accounts');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_accounts_Accounts(buffer_arg) {
  return node_accounts_accounts_pb.Accounts.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_accounts_CreateRequest(arg) {
  if (!(arg instanceof node_accounts_accounts_pb.CreateRequest)) {
    throw new Error('Expected argument of type infinimesh.node.accounts.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_accounts_CreateRequest(buffer_arg) {
  return node_accounts_accounts_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_accounts_CreateResponse(arg) {
  if (!(arg instanceof node_accounts_accounts_pb.CreateResponse)) {
    throw new Error('Expected argument of type infinimesh.node.accounts.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_accounts_CreateResponse(buffer_arg) {
  return node_accounts_accounts_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_devices_CreateRequest(arg) {
  if (!(arg instanceof node_devices_devices_pb.CreateRequest)) {
    throw new Error('Expected argument of type infinimesh.node.devices.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_devices_CreateRequest(buffer_arg) {
  return node_devices_devices_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_devices_CreateResponse(arg) {
  if (!(arg instanceof node_devices_devices_pb.CreateResponse)) {
    throw new Error('Expected argument of type infinimesh.node.devices.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_devices_CreateResponse(buffer_arg) {
  return node_devices_devices_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_devices_Device(arg) {
  if (!(arg instanceof node_devices_devices_pb.Device)) {
    throw new Error('Expected argument of type infinimesh.node.devices.Device');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_devices_Device(buffer_arg) {
  return node_devices_devices_pb.Device.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_devices_Devices(arg) {
  if (!(arg instanceof node_devices_devices_pb.Devices)) {
    throw new Error('Expected argument of type infinimesh.node.devices.Devices');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_devices_Devices(buffer_arg) {
  return node_devices_devices_pb.Devices.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_devices_GetByFingerprintRequest(arg) {
  if (!(arg instanceof node_devices_devices_pb.GetByFingerprintRequest)) {
    throw new Error('Expected argument of type infinimesh.node.devices.GetByFingerprintRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_devices_GetByFingerprintRequest(buffer_arg) {
  return node_devices_devices_pb.GetByFingerprintRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_namespaces_Namespace(arg) {
  if (!(arg instanceof node_namespaces_namespaces_pb.Namespace)) {
    throw new Error('Expected argument of type infinimesh.node.namespaces.Namespace');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_namespaces_Namespace(buffer_arg) {
  return node_namespaces_namespaces_pb.Namespace.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_infinimesh_node_namespaces_Namespaces(arg) {
  if (!(arg instanceof node_namespaces_namespaces_pb.Namespaces)) {
    throw new Error('Expected argument of type infinimesh.node.namespaces.Namespaces');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_infinimesh_node_namespaces_Namespaces(buffer_arg) {
  return node_namespaces_namespaces_pb.Namespaces.deserializeBinary(new Uint8Array(buffer_arg));
}

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


var AccountsServiceService = exports.AccountsServiceService = {
  token: {
    path: '/infinimesh.node.AccountsService/Token',
    requestStream: false,
    responseStream: false,
    requestType: node_node_pb.TokenRequest,
    responseType: node_node_pb.TokenResponse,
    requestSerialize: serialize_infinimesh_node_TokenRequest,
    requestDeserialize: deserialize_infinimesh_node_TokenRequest,
    responseSerialize: serialize_infinimesh_node_TokenResponse,
    responseDeserialize: deserialize_infinimesh_node_TokenResponse,
  },
  get: {
    path: '/infinimesh.node.AccountsService/Get',
    requestStream: false,
    responseStream: false,
    requestType: node_accounts_accounts_pb.Account,
    responseType: node_accounts_accounts_pb.Account,
    requestSerialize: serialize_infinimesh_node_accounts_Account,
    requestDeserialize: deserialize_infinimesh_node_accounts_Account,
    responseSerialize: serialize_infinimesh_node_accounts_Account,
    responseDeserialize: deserialize_infinimesh_node_accounts_Account,
  },
  list: {
    path: '/infinimesh.node.AccountsService/List',
    requestStream: false,
    responseStream: false,
    requestType: node_node_pb.EmptyMessage,
    responseType: node_accounts_accounts_pb.Accounts,
    requestSerialize: serialize_infinimesh_node_EmptyMessage,
    requestDeserialize: deserialize_infinimesh_node_EmptyMessage,
    responseSerialize: serialize_infinimesh_node_accounts_Accounts,
    responseDeserialize: deserialize_infinimesh_node_accounts_Accounts,
  },
  create: {
    path: '/infinimesh.node.AccountsService/Create',
    requestStream: false,
    responseStream: false,
    requestType: node_accounts_accounts_pb.CreateRequest,
    responseType: node_accounts_accounts_pb.CreateResponse,
    requestSerialize: serialize_infinimesh_node_accounts_CreateRequest,
    requestDeserialize: deserialize_infinimesh_node_accounts_CreateRequest,
    responseSerialize: serialize_infinimesh_node_accounts_CreateResponse,
    responseDeserialize: deserialize_infinimesh_node_accounts_CreateResponse,
  },
  update: {
    path: '/infinimesh.node.AccountsService/Update',
    requestStream: false,
    responseStream: false,
    requestType: node_accounts_accounts_pb.Account,
    responseType: node_accounts_accounts_pb.Account,
    requestSerialize: serialize_infinimesh_node_accounts_Account,
    requestDeserialize: deserialize_infinimesh_node_accounts_Account,
    responseSerialize: serialize_infinimesh_node_accounts_Account,
    responseDeserialize: deserialize_infinimesh_node_accounts_Account,
  },
  toggle: {
    path: '/infinimesh.node.AccountsService/Toggle',
    requestStream: false,
    responseStream: false,
    requestType: node_accounts_accounts_pb.Account,
    responseType: node_accounts_accounts_pb.Account,
    requestSerialize: serialize_infinimesh_node_accounts_Account,
    requestDeserialize: deserialize_infinimesh_node_accounts_Account,
    responseSerialize: serialize_infinimesh_node_accounts_Account,
    responseDeserialize: deserialize_infinimesh_node_accounts_Account,
  },
  delete: {
    path: '/infinimesh.node.AccountsService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: node_accounts_accounts_pb.Account,
    responseType: node_node_pb.DeleteResponse,
    requestSerialize: serialize_infinimesh_node_accounts_Account,
    requestDeserialize: deserialize_infinimesh_node_accounts_Account,
    responseSerialize: serialize_infinimesh_node_DeleteResponse,
    responseDeserialize: deserialize_infinimesh_node_DeleteResponse,
  },
  deletables: {
    path: '/infinimesh.node.AccountsService/Deletables',
    requestStream: false,
    responseStream: false,
    requestType: node_accounts_accounts_pb.Account,
    responseType: node_access_access_pb.Nodes,
    requestSerialize: serialize_infinimesh_node_accounts_Account,
    requestDeserialize: deserialize_infinimesh_node_accounts_Account,
    responseSerialize: serialize_infinimesh_node_access_Nodes,
    responseDeserialize: deserialize_infinimesh_node_access_Nodes,
  },
  setCredentials: {
    path: '/infinimesh.node.AccountsService/SetCredentials',
    requestStream: false,
    responseStream: false,
    requestType: node_node_pb.SetCredentialsRequest,
    responseType: node_node_pb.SetCredentialsResponse,
    requestSerialize: serialize_infinimesh_node_SetCredentialsRequest,
    requestDeserialize: deserialize_infinimesh_node_SetCredentialsRequest,
    responseSerialize: serialize_infinimesh_node_SetCredentialsResponse,
    responseDeserialize: deserialize_infinimesh_node_SetCredentialsResponse,
  },
};

exports.AccountsServiceClient = grpc.makeGenericClientConstructor(AccountsServiceService);
var NamespacesServiceService = exports.NamespacesServiceService = {
  get: {
    path: '/infinimesh.node.NamespacesService/Get',
    requestStream: false,
    responseStream: false,
    requestType: node_namespaces_namespaces_pb.Namespace,
    responseType: node_namespaces_namespaces_pb.Namespace,
    requestSerialize: serialize_infinimesh_node_namespaces_Namespace,
    requestDeserialize: deserialize_infinimesh_node_namespaces_Namespace,
    responseSerialize: serialize_infinimesh_node_namespaces_Namespace,
    responseDeserialize: deserialize_infinimesh_node_namespaces_Namespace,
  },
  list: {
    path: '/infinimesh.node.NamespacesService/List',
    requestStream: false,
    responseStream: false,
    requestType: node_node_pb.EmptyMessage,
    responseType: node_namespaces_namespaces_pb.Namespaces,
    requestSerialize: serialize_infinimesh_node_EmptyMessage,
    requestDeserialize: deserialize_infinimesh_node_EmptyMessage,
    responseSerialize: serialize_infinimesh_node_namespaces_Namespaces,
    responseDeserialize: deserialize_infinimesh_node_namespaces_Namespaces,
  },
  create: {
    path: '/infinimesh.node.NamespacesService/Create',
    requestStream: false,
    responseStream: false,
    requestType: node_namespaces_namespaces_pb.Namespace,
    responseType: node_namespaces_namespaces_pb.Namespace,
    requestSerialize: serialize_infinimesh_node_namespaces_Namespace,
    requestDeserialize: deserialize_infinimesh_node_namespaces_Namespace,
    responseSerialize: serialize_infinimesh_node_namespaces_Namespace,
    responseDeserialize: deserialize_infinimesh_node_namespaces_Namespace,
  },
  update: {
    path: '/infinimesh.node.NamespacesService/Update',
    requestStream: false,
    responseStream: false,
    requestType: node_namespaces_namespaces_pb.Namespace,
    responseType: node_namespaces_namespaces_pb.Namespace,
    requestSerialize: serialize_infinimesh_node_namespaces_Namespace,
    requestDeserialize: deserialize_infinimesh_node_namespaces_Namespace,
    responseSerialize: serialize_infinimesh_node_namespaces_Namespace,
    responseDeserialize: deserialize_infinimesh_node_namespaces_Namespace,
  },
  delete: {
    path: '/infinimesh.node.NamespacesService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: node_namespaces_namespaces_pb.Namespace,
    responseType: node_node_pb.DeleteResponse,
    requestSerialize: serialize_infinimesh_node_namespaces_Namespace,
    requestDeserialize: deserialize_infinimesh_node_namespaces_Namespace,
    responseSerialize: serialize_infinimesh_node_DeleteResponse,
    responseDeserialize: deserialize_infinimesh_node_DeleteResponse,
  },
  deletables: {
    path: '/infinimesh.node.NamespacesService/Deletables',
    requestStream: false,
    responseStream: false,
    requestType: node_namespaces_namespaces_pb.Namespace,
    responseType: node_access_access_pb.Nodes,
    requestSerialize: serialize_infinimesh_node_namespaces_Namespace,
    requestDeserialize: deserialize_infinimesh_node_namespaces_Namespace,
    responseSerialize: serialize_infinimesh_node_access_Nodes,
    responseDeserialize: deserialize_infinimesh_node_access_Nodes,
  },
  // Accounts having access to this namespace
joins: {
    path: '/infinimesh.node.NamespacesService/Joins',
    requestStream: false,
    responseStream: false,
    requestType: node_namespaces_namespaces_pb.Namespace,
    responseType: node_accounts_accounts_pb.Accounts,
    requestSerialize: serialize_infinimesh_node_namespaces_Namespace,
    requestDeserialize: deserialize_infinimesh_node_namespaces_Namespace,
    responseSerialize: serialize_infinimesh_node_accounts_Accounts,
    responseDeserialize: deserialize_infinimesh_node_accounts_Accounts,
  },
  // Sets Access to this namespace for the given account(deletes if level is set to NONE(0))
join: {
    path: '/infinimesh.node.NamespacesService/Join',
    requestStream: false,
    responseStream: false,
    requestType: node_node_pb.JoinRequest,
    responseType: node_accounts_accounts_pb.Accounts,
    requestSerialize: serialize_infinimesh_node_JoinRequest,
    requestDeserialize: deserialize_infinimesh_node_JoinRequest,
    responseSerialize: serialize_infinimesh_node_accounts_Accounts,
    responseDeserialize: deserialize_infinimesh_node_accounts_Accounts,
  },
};

exports.NamespacesServiceClient = grpc.makeGenericClientConstructor(NamespacesServiceService);
var DevicesServiceService = exports.DevicesServiceService = {
  get: {
    path: '/infinimesh.node.DevicesService/Get',
    requestStream: false,
    responseStream: false,
    requestType: node_devices_devices_pb.Device,
    responseType: node_devices_devices_pb.Device,
    requestSerialize: serialize_infinimesh_node_devices_Device,
    requestDeserialize: deserialize_infinimesh_node_devices_Device,
    responseSerialize: serialize_infinimesh_node_devices_Device,
    responseDeserialize: deserialize_infinimesh_node_devices_Device,
  },
  list: {
    path: '/infinimesh.node.DevicesService/List',
    requestStream: false,
    responseStream: false,
    requestType: node_node_pb.EmptyMessage,
    responseType: node_devices_devices_pb.Devices,
    requestSerialize: serialize_infinimesh_node_EmptyMessage,
    requestDeserialize: deserialize_infinimesh_node_EmptyMessage,
    responseSerialize: serialize_infinimesh_node_devices_Devices,
    responseDeserialize: deserialize_infinimesh_node_devices_Devices,
  },
  create: {
    path: '/infinimesh.node.DevicesService/Create',
    requestStream: false,
    responseStream: false,
    requestType: node_devices_devices_pb.CreateRequest,
    responseType: node_devices_devices_pb.CreateResponse,
    requestSerialize: serialize_infinimesh_node_devices_CreateRequest,
    requestDeserialize: deserialize_infinimesh_node_devices_CreateRequest,
    responseSerialize: serialize_infinimesh_node_devices_CreateResponse,
    responseDeserialize: deserialize_infinimesh_node_devices_CreateResponse,
  },
  update: {
    path: '/infinimesh.node.DevicesService/Update',
    requestStream: false,
    responseStream: false,
    requestType: node_devices_devices_pb.Device,
    responseType: node_devices_devices_pb.Device,
    requestSerialize: serialize_infinimesh_node_devices_Device,
    requestDeserialize: deserialize_infinimesh_node_devices_Device,
    responseSerialize: serialize_infinimesh_node_devices_Device,
    responseDeserialize: deserialize_infinimesh_node_devices_Device,
  },
  delete: {
    path: '/infinimesh.node.DevicesService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: node_devices_devices_pb.Device,
    responseType: node_node_pb.DeleteResponse,
    requestSerialize: serialize_infinimesh_node_devices_Device,
    requestDeserialize: deserialize_infinimesh_node_devices_Device,
    responseSerialize: serialize_infinimesh_node_DeleteResponse,
    responseDeserialize: deserialize_infinimesh_node_DeleteResponse,
  },
  toggle: {
    path: '/infinimesh.node.DevicesService/Toggle',
    requestStream: false,
    responseStream: false,
    requestType: node_devices_devices_pb.Device,
    responseType: node_devices_devices_pb.Device,
    requestSerialize: serialize_infinimesh_node_devices_Device,
    requestDeserialize: deserialize_infinimesh_node_devices_Device,
    responseSerialize: serialize_infinimesh_node_devices_Device,
    responseDeserialize: deserialize_infinimesh_node_devices_Device,
  },
  toggleBasic: {
    path: '/infinimesh.node.DevicesService/ToggleBasic',
    requestStream: false,
    responseStream: false,
    requestType: node_devices_devices_pb.Device,
    responseType: node_devices_devices_pb.Device,
    requestSerialize: serialize_infinimesh_node_devices_Device,
    requestDeserialize: deserialize_infinimesh_node_devices_Device,
    responseSerialize: serialize_infinimesh_node_devices_Device,
    responseDeserialize: deserialize_infinimesh_node_devices_Device,
  },
  makeDevicesToken: {
    path: '/infinimesh.node.DevicesService/MakeDevicesToken',
    requestStream: false,
    responseStream: false,
    requestType: node_node_pb.DevicesTokenRequest,
    responseType: node_node_pb.TokenResponse,
    requestSerialize: serialize_infinimesh_node_DevicesTokenRequest,
    requestDeserialize: deserialize_infinimesh_node_DevicesTokenRequest,
    responseSerialize: serialize_infinimesh_node_TokenResponse,
    responseDeserialize: deserialize_infinimesh_node_TokenResponse,
  },
  getByToken: {
    path: '/infinimesh.node.DevicesService/GetByToken',
    requestStream: false,
    responseStream: false,
    requestType: node_devices_devices_pb.Device,
    responseType: node_devices_devices_pb.Device,
    requestSerialize: serialize_infinimesh_node_devices_Device,
    requestDeserialize: deserialize_infinimesh_node_devices_Device,
    responseSerialize: serialize_infinimesh_node_devices_Device,
    responseDeserialize: deserialize_infinimesh_node_devices_Device,
  },
  getByFingerprint: {
    path: '/infinimesh.node.DevicesService/GetByFingerprint',
    requestStream: false,
    responseStream: false,
    requestType: node_devices_devices_pb.GetByFingerprintRequest,
    responseType: node_devices_devices_pb.Device,
    requestSerialize: serialize_infinimesh_node_devices_GetByFingerprintRequest,
    requestDeserialize: deserialize_infinimesh_node_devices_GetByFingerprintRequest,
    responseSerialize: serialize_infinimesh_node_devices_Device,
    responseDeserialize: deserialize_infinimesh_node_devices_Device,
  },
};

exports.DevicesServiceClient = grpc.makeGenericClientConstructor(DevicesServiceService);
var ShadowServiceService = exports.ShadowServiceService = {
  get: {
    path: '/infinimesh.node.ShadowService/Get',
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
    path: '/infinimesh.node.ShadowService/Patch',
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
    path: '/infinimesh.node.ShadowService/StreamShadow',
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
