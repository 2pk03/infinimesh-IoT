// package: infinimesh.node
// file: node/node.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as node_node_pb from "../node/node_pb";
import * as node_accounts_accounts_pb from "../node/accounts/accounts_pb";
import * as node_access_access_pb from "../node/access/access_pb";
import * as node_namespaces_namespaces_pb from "../node/namespaces/namespaces_pb";
import * as node_devices_devices_pb from "../node/devices/devices_pb";
import * as shadow_shadow_pb from "../shadow/shadow_pb";

interface IAccountsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    token: IAccountsServiceService_IToken;
    get: IAccountsServiceService_IGet;
    list: IAccountsServiceService_IList;
    create: IAccountsServiceService_ICreate;
    update: IAccountsServiceService_IUpdate;
    toggle: IAccountsServiceService_IToggle;
    delete: IAccountsServiceService_IDelete;
    deletables: IAccountsServiceService_IDeletables;
    setCredentials: IAccountsServiceService_ISetCredentials;
}

interface IAccountsServiceService_IToken extends grpc.MethodDefinition<node_node_pb.TokenRequest, node_node_pb.TokenResponse> {
    path: "/infinimesh.node.AccountsService/Token";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_node_pb.TokenRequest>;
    requestDeserialize: grpc.deserialize<node_node_pb.TokenRequest>;
    responseSerialize: grpc.serialize<node_node_pb.TokenResponse>;
    responseDeserialize: grpc.deserialize<node_node_pb.TokenResponse>;
}
interface IAccountsServiceService_IGet extends grpc.MethodDefinition<node_accounts_accounts_pb.Account, node_accounts_accounts_pb.Account> {
    path: "/infinimesh.node.AccountsService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_accounts_accounts_pb.Account>;
    requestDeserialize: grpc.deserialize<node_accounts_accounts_pb.Account>;
    responseSerialize: grpc.serialize<node_accounts_accounts_pb.Account>;
    responseDeserialize: grpc.deserialize<node_accounts_accounts_pb.Account>;
}
interface IAccountsServiceService_IList extends grpc.MethodDefinition<node_node_pb.EmptyMessage, node_accounts_accounts_pb.Accounts> {
    path: "/infinimesh.node.AccountsService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_node_pb.EmptyMessage>;
    requestDeserialize: grpc.deserialize<node_node_pb.EmptyMessage>;
    responseSerialize: grpc.serialize<node_accounts_accounts_pb.Accounts>;
    responseDeserialize: grpc.deserialize<node_accounts_accounts_pb.Accounts>;
}
interface IAccountsServiceService_ICreate extends grpc.MethodDefinition<node_accounts_accounts_pb.CreateRequest, node_accounts_accounts_pb.CreateResponse> {
    path: "/infinimesh.node.AccountsService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_accounts_accounts_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<node_accounts_accounts_pb.CreateRequest>;
    responseSerialize: grpc.serialize<node_accounts_accounts_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<node_accounts_accounts_pb.CreateResponse>;
}
interface IAccountsServiceService_IUpdate extends grpc.MethodDefinition<node_accounts_accounts_pb.Account, node_accounts_accounts_pb.Account> {
    path: "/infinimesh.node.AccountsService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_accounts_accounts_pb.Account>;
    requestDeserialize: grpc.deserialize<node_accounts_accounts_pb.Account>;
    responseSerialize: grpc.serialize<node_accounts_accounts_pb.Account>;
    responseDeserialize: grpc.deserialize<node_accounts_accounts_pb.Account>;
}
interface IAccountsServiceService_IToggle extends grpc.MethodDefinition<node_accounts_accounts_pb.Account, node_accounts_accounts_pb.Account> {
    path: "/infinimesh.node.AccountsService/Toggle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_accounts_accounts_pb.Account>;
    requestDeserialize: grpc.deserialize<node_accounts_accounts_pb.Account>;
    responseSerialize: grpc.serialize<node_accounts_accounts_pb.Account>;
    responseDeserialize: grpc.deserialize<node_accounts_accounts_pb.Account>;
}
interface IAccountsServiceService_IDelete extends grpc.MethodDefinition<node_accounts_accounts_pb.Account, node_node_pb.DeleteResponse> {
    path: "/infinimesh.node.AccountsService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_accounts_accounts_pb.Account>;
    requestDeserialize: grpc.deserialize<node_accounts_accounts_pb.Account>;
    responseSerialize: grpc.serialize<node_node_pb.DeleteResponse>;
    responseDeserialize: grpc.deserialize<node_node_pb.DeleteResponse>;
}
interface IAccountsServiceService_IDeletables extends grpc.MethodDefinition<node_accounts_accounts_pb.Account, node_access_access_pb.Nodes> {
    path: "/infinimesh.node.AccountsService/Deletables";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_accounts_accounts_pb.Account>;
    requestDeserialize: grpc.deserialize<node_accounts_accounts_pb.Account>;
    responseSerialize: grpc.serialize<node_access_access_pb.Nodes>;
    responseDeserialize: grpc.deserialize<node_access_access_pb.Nodes>;
}
interface IAccountsServiceService_ISetCredentials extends grpc.MethodDefinition<node_node_pb.SetCredentialsRequest, node_node_pb.SetCredentialsResponse> {
    path: "/infinimesh.node.AccountsService/SetCredentials";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_node_pb.SetCredentialsRequest>;
    requestDeserialize: grpc.deserialize<node_node_pb.SetCredentialsRequest>;
    responseSerialize: grpc.serialize<node_node_pb.SetCredentialsResponse>;
    responseDeserialize: grpc.deserialize<node_node_pb.SetCredentialsResponse>;
}

export const AccountsServiceService: IAccountsServiceService;

export interface IAccountsServiceServer {
    token: grpc.handleUnaryCall<node_node_pb.TokenRequest, node_node_pb.TokenResponse>;
    get: grpc.handleUnaryCall<node_accounts_accounts_pb.Account, node_accounts_accounts_pb.Account>;
    list: grpc.handleUnaryCall<node_node_pb.EmptyMessage, node_accounts_accounts_pb.Accounts>;
    create: grpc.handleUnaryCall<node_accounts_accounts_pb.CreateRequest, node_accounts_accounts_pb.CreateResponse>;
    update: grpc.handleUnaryCall<node_accounts_accounts_pb.Account, node_accounts_accounts_pb.Account>;
    toggle: grpc.handleUnaryCall<node_accounts_accounts_pb.Account, node_accounts_accounts_pb.Account>;
    delete: grpc.handleUnaryCall<node_accounts_accounts_pb.Account, node_node_pb.DeleteResponse>;
    deletables: grpc.handleUnaryCall<node_accounts_accounts_pb.Account, node_access_access_pb.Nodes>;
    setCredentials: grpc.handleUnaryCall<node_node_pb.SetCredentialsRequest, node_node_pb.SetCredentialsResponse>;
}

export interface IAccountsServiceClient {
    token(request: node_node_pb.TokenRequest, callback: (error: grpc.ServiceError | null, response: node_node_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    token(request: node_node_pb.TokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_node_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    token(request: node_node_pb.TokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_node_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    get(request: node_accounts_accounts_pb.Account, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    get(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    get(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    list(request: node_node_pb.EmptyMessage, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    list(request: node_node_pb.EmptyMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    list(request: node_node_pb.EmptyMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    create(request: node_accounts_accounts_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: node_accounts_accounts_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: node_accounts_accounts_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    update(request: node_accounts_accounts_pb.Account, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    update(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    update(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    toggle(request: node_accounts_accounts_pb.Account, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    toggle(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    toggle(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    delete(request: node_accounts_accounts_pb.Account, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    deletables(request: node_accounts_accounts_pb.Account, callback: (error: grpc.ServiceError | null, response: node_access_access_pb.Nodes) => void): grpc.ClientUnaryCall;
    deletables(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_access_access_pb.Nodes) => void): grpc.ClientUnaryCall;
    deletables(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_access_access_pb.Nodes) => void): grpc.ClientUnaryCall;
    setCredentials(request: node_node_pb.SetCredentialsRequest, callback: (error: grpc.ServiceError | null, response: node_node_pb.SetCredentialsResponse) => void): grpc.ClientUnaryCall;
    setCredentials(request: node_node_pb.SetCredentialsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_node_pb.SetCredentialsResponse) => void): grpc.ClientUnaryCall;
    setCredentials(request: node_node_pb.SetCredentialsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_node_pb.SetCredentialsResponse) => void): grpc.ClientUnaryCall;
}

export class AccountsServiceClient extends grpc.Client implements IAccountsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public token(request: node_node_pb.TokenRequest, callback: (error: grpc.ServiceError | null, response: node_node_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public token(request: node_node_pb.TokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_node_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public token(request: node_node_pb.TokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_node_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public get(request: node_accounts_accounts_pb.Account, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    public get(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    public get(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    public list(request: node_node_pb.EmptyMessage, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    public list(request: node_node_pb.EmptyMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    public list(request: node_node_pb.EmptyMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    public create(request: node_accounts_accounts_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: node_accounts_accounts_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: node_accounts_accounts_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public update(request: node_accounts_accounts_pb.Account, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    public update(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    public update(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    public toggle(request: node_accounts_accounts_pb.Account, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    public toggle(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    public toggle(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Account) => void): grpc.ClientUnaryCall;
    public delete(request: node_accounts_accounts_pb.Account, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public deletables(request: node_accounts_accounts_pb.Account, callback: (error: grpc.ServiceError | null, response: node_access_access_pb.Nodes) => void): grpc.ClientUnaryCall;
    public deletables(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_access_access_pb.Nodes) => void): grpc.ClientUnaryCall;
    public deletables(request: node_accounts_accounts_pb.Account, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_access_access_pb.Nodes) => void): grpc.ClientUnaryCall;
    public setCredentials(request: node_node_pb.SetCredentialsRequest, callback: (error: grpc.ServiceError | null, response: node_node_pb.SetCredentialsResponse) => void): grpc.ClientUnaryCall;
    public setCredentials(request: node_node_pb.SetCredentialsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_node_pb.SetCredentialsResponse) => void): grpc.ClientUnaryCall;
    public setCredentials(request: node_node_pb.SetCredentialsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_node_pb.SetCredentialsResponse) => void): grpc.ClientUnaryCall;
}

interface INamespacesServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: INamespacesServiceService_IGet;
    list: INamespacesServiceService_IList;
    create: INamespacesServiceService_ICreate;
    update: INamespacesServiceService_IUpdate;
    delete: INamespacesServiceService_IDelete;
    deletables: INamespacesServiceService_IDeletables;
    joins: INamespacesServiceService_IJoins;
    join: INamespacesServiceService_IJoin;
}

interface INamespacesServiceService_IGet extends grpc.MethodDefinition<node_namespaces_namespaces_pb.Namespace, node_namespaces_namespaces_pb.Namespace> {
    path: "/infinimesh.node.NamespacesService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_namespaces_namespaces_pb.Namespace>;
    requestDeserialize: grpc.deserialize<node_namespaces_namespaces_pb.Namespace>;
    responseSerialize: grpc.serialize<node_namespaces_namespaces_pb.Namespace>;
    responseDeserialize: grpc.deserialize<node_namespaces_namespaces_pb.Namespace>;
}
interface INamespacesServiceService_IList extends grpc.MethodDefinition<node_node_pb.EmptyMessage, node_namespaces_namespaces_pb.Namespaces> {
    path: "/infinimesh.node.NamespacesService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_node_pb.EmptyMessage>;
    requestDeserialize: grpc.deserialize<node_node_pb.EmptyMessage>;
    responseSerialize: grpc.serialize<node_namespaces_namespaces_pb.Namespaces>;
    responseDeserialize: grpc.deserialize<node_namespaces_namespaces_pb.Namespaces>;
}
interface INamespacesServiceService_ICreate extends grpc.MethodDefinition<node_namespaces_namespaces_pb.Namespace, node_namespaces_namespaces_pb.Namespace> {
    path: "/infinimesh.node.NamespacesService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_namespaces_namespaces_pb.Namespace>;
    requestDeserialize: grpc.deserialize<node_namespaces_namespaces_pb.Namespace>;
    responseSerialize: grpc.serialize<node_namespaces_namespaces_pb.Namespace>;
    responseDeserialize: grpc.deserialize<node_namespaces_namespaces_pb.Namespace>;
}
interface INamespacesServiceService_IUpdate extends grpc.MethodDefinition<node_namespaces_namespaces_pb.Namespace, node_namespaces_namespaces_pb.Namespace> {
    path: "/infinimesh.node.NamespacesService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_namespaces_namespaces_pb.Namespace>;
    requestDeserialize: grpc.deserialize<node_namespaces_namespaces_pb.Namespace>;
    responseSerialize: grpc.serialize<node_namespaces_namespaces_pb.Namespace>;
    responseDeserialize: grpc.deserialize<node_namespaces_namespaces_pb.Namespace>;
}
interface INamespacesServiceService_IDelete extends grpc.MethodDefinition<node_namespaces_namespaces_pb.Namespace, node_node_pb.DeleteResponse> {
    path: "/infinimesh.node.NamespacesService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_namespaces_namespaces_pb.Namespace>;
    requestDeserialize: grpc.deserialize<node_namespaces_namespaces_pb.Namespace>;
    responseSerialize: grpc.serialize<node_node_pb.DeleteResponse>;
    responseDeserialize: grpc.deserialize<node_node_pb.DeleteResponse>;
}
interface INamespacesServiceService_IDeletables extends grpc.MethodDefinition<node_namespaces_namespaces_pb.Namespace, node_access_access_pb.Nodes> {
    path: "/infinimesh.node.NamespacesService/Deletables";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_namespaces_namespaces_pb.Namespace>;
    requestDeserialize: grpc.deserialize<node_namespaces_namespaces_pb.Namespace>;
    responseSerialize: grpc.serialize<node_access_access_pb.Nodes>;
    responseDeserialize: grpc.deserialize<node_access_access_pb.Nodes>;
}
interface INamespacesServiceService_IJoins extends grpc.MethodDefinition<node_namespaces_namespaces_pb.Namespace, node_accounts_accounts_pb.Accounts> {
    path: "/infinimesh.node.NamespacesService/Joins";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_namespaces_namespaces_pb.Namespace>;
    requestDeserialize: grpc.deserialize<node_namespaces_namespaces_pb.Namespace>;
    responseSerialize: grpc.serialize<node_accounts_accounts_pb.Accounts>;
    responseDeserialize: grpc.deserialize<node_accounts_accounts_pb.Accounts>;
}
interface INamespacesServiceService_IJoin extends grpc.MethodDefinition<node_node_pb.JoinRequest, node_accounts_accounts_pb.Accounts> {
    path: "/infinimesh.node.NamespacesService/Join";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_node_pb.JoinRequest>;
    requestDeserialize: grpc.deserialize<node_node_pb.JoinRequest>;
    responseSerialize: grpc.serialize<node_accounts_accounts_pb.Accounts>;
    responseDeserialize: grpc.deserialize<node_accounts_accounts_pb.Accounts>;
}

export const NamespacesServiceService: INamespacesServiceService;

export interface INamespacesServiceServer {
    get: grpc.handleUnaryCall<node_namespaces_namespaces_pb.Namespace, node_namespaces_namespaces_pb.Namespace>;
    list: grpc.handleUnaryCall<node_node_pb.EmptyMessage, node_namespaces_namespaces_pb.Namespaces>;
    create: grpc.handleUnaryCall<node_namespaces_namespaces_pb.Namespace, node_namespaces_namespaces_pb.Namespace>;
    update: grpc.handleUnaryCall<node_namespaces_namespaces_pb.Namespace, node_namespaces_namespaces_pb.Namespace>;
    delete: grpc.handleUnaryCall<node_namespaces_namespaces_pb.Namespace, node_node_pb.DeleteResponse>;
    deletables: grpc.handleUnaryCall<node_namespaces_namespaces_pb.Namespace, node_access_access_pb.Nodes>;
    joins: grpc.handleUnaryCall<node_namespaces_namespaces_pb.Namespace, node_accounts_accounts_pb.Accounts>;
    join: grpc.handleUnaryCall<node_node_pb.JoinRequest, node_accounts_accounts_pb.Accounts>;
}

export interface INamespacesServiceClient {
    get(request: node_namespaces_namespaces_pb.Namespace, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    get(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    get(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    list(request: node_node_pb.EmptyMessage, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespaces) => void): grpc.ClientUnaryCall;
    list(request: node_node_pb.EmptyMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespaces) => void): grpc.ClientUnaryCall;
    list(request: node_node_pb.EmptyMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespaces) => void): grpc.ClientUnaryCall;
    create(request: node_namespaces_namespaces_pb.Namespace, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    create(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    create(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    update(request: node_namespaces_namespaces_pb.Namespace, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    update(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    update(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    delete(request: node_namespaces_namespaces_pb.Namespace, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    deletables(request: node_namespaces_namespaces_pb.Namespace, callback: (error: grpc.ServiceError | null, response: node_access_access_pb.Nodes) => void): grpc.ClientUnaryCall;
    deletables(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_access_access_pb.Nodes) => void): grpc.ClientUnaryCall;
    deletables(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_access_access_pb.Nodes) => void): grpc.ClientUnaryCall;
    joins(request: node_namespaces_namespaces_pb.Namespace, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    joins(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    joins(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    join(request: node_node_pb.JoinRequest, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    join(request: node_node_pb.JoinRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    join(request: node_node_pb.JoinRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
}

export class NamespacesServiceClient extends grpc.Client implements INamespacesServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: node_namespaces_namespaces_pb.Namespace, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    public get(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    public get(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    public list(request: node_node_pb.EmptyMessage, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespaces) => void): grpc.ClientUnaryCall;
    public list(request: node_node_pb.EmptyMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespaces) => void): grpc.ClientUnaryCall;
    public list(request: node_node_pb.EmptyMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespaces) => void): grpc.ClientUnaryCall;
    public create(request: node_namespaces_namespaces_pb.Namespace, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    public create(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    public create(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    public update(request: node_namespaces_namespaces_pb.Namespace, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    public update(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    public update(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_namespaces_namespaces_pb.Namespace) => void): grpc.ClientUnaryCall;
    public delete(request: node_namespaces_namespaces_pb.Namespace, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public deletables(request: node_namespaces_namespaces_pb.Namespace, callback: (error: grpc.ServiceError | null, response: node_access_access_pb.Nodes) => void): grpc.ClientUnaryCall;
    public deletables(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_access_access_pb.Nodes) => void): grpc.ClientUnaryCall;
    public deletables(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_access_access_pb.Nodes) => void): grpc.ClientUnaryCall;
    public joins(request: node_namespaces_namespaces_pb.Namespace, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    public joins(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    public joins(request: node_namespaces_namespaces_pb.Namespace, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    public join(request: node_node_pb.JoinRequest, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    public join(request: node_node_pb.JoinRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
    public join(request: node_node_pb.JoinRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_accounts_accounts_pb.Accounts) => void): grpc.ClientUnaryCall;
}

interface IDevicesServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IDevicesServiceService_IGet;
    list: IDevicesServiceService_IList;
    create: IDevicesServiceService_ICreate;
    update: IDevicesServiceService_IUpdate;
    delete: IDevicesServiceService_IDelete;
    toggle: IDevicesServiceService_IToggle;
    toggleBasic: IDevicesServiceService_IToggleBasic;
    makeDevicesToken: IDevicesServiceService_IMakeDevicesToken;
    getByToken: IDevicesServiceService_IGetByToken;
    getByFingerprint: IDevicesServiceService_IGetByFingerprint;
}

interface IDevicesServiceService_IGet extends grpc.MethodDefinition<node_devices_devices_pb.Device, node_devices_devices_pb.Device> {
    path: "/infinimesh.node.DevicesService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_devices_devices_pb.Device>;
    requestDeserialize: grpc.deserialize<node_devices_devices_pb.Device>;
    responseSerialize: grpc.serialize<node_devices_devices_pb.Device>;
    responseDeserialize: grpc.deserialize<node_devices_devices_pb.Device>;
}
interface IDevicesServiceService_IList extends grpc.MethodDefinition<node_node_pb.EmptyMessage, node_devices_devices_pb.Devices> {
    path: "/infinimesh.node.DevicesService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_node_pb.EmptyMessage>;
    requestDeserialize: grpc.deserialize<node_node_pb.EmptyMessage>;
    responseSerialize: grpc.serialize<node_devices_devices_pb.Devices>;
    responseDeserialize: grpc.deserialize<node_devices_devices_pb.Devices>;
}
interface IDevicesServiceService_ICreate extends grpc.MethodDefinition<node_devices_devices_pb.CreateRequest, node_devices_devices_pb.CreateResponse> {
    path: "/infinimesh.node.DevicesService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_devices_devices_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<node_devices_devices_pb.CreateRequest>;
    responseSerialize: grpc.serialize<node_devices_devices_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<node_devices_devices_pb.CreateResponse>;
}
interface IDevicesServiceService_IUpdate extends grpc.MethodDefinition<node_devices_devices_pb.Device, node_devices_devices_pb.Device> {
    path: "/infinimesh.node.DevicesService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_devices_devices_pb.Device>;
    requestDeserialize: grpc.deserialize<node_devices_devices_pb.Device>;
    responseSerialize: grpc.serialize<node_devices_devices_pb.Device>;
    responseDeserialize: grpc.deserialize<node_devices_devices_pb.Device>;
}
interface IDevicesServiceService_IDelete extends grpc.MethodDefinition<node_devices_devices_pb.Device, node_node_pb.DeleteResponse> {
    path: "/infinimesh.node.DevicesService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_devices_devices_pb.Device>;
    requestDeserialize: grpc.deserialize<node_devices_devices_pb.Device>;
    responseSerialize: grpc.serialize<node_node_pb.DeleteResponse>;
    responseDeserialize: grpc.deserialize<node_node_pb.DeleteResponse>;
}
interface IDevicesServiceService_IToggle extends grpc.MethodDefinition<node_devices_devices_pb.Device, node_devices_devices_pb.Device> {
    path: "/infinimesh.node.DevicesService/Toggle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_devices_devices_pb.Device>;
    requestDeserialize: grpc.deserialize<node_devices_devices_pb.Device>;
    responseSerialize: grpc.serialize<node_devices_devices_pb.Device>;
    responseDeserialize: grpc.deserialize<node_devices_devices_pb.Device>;
}
interface IDevicesServiceService_IToggleBasic extends grpc.MethodDefinition<node_devices_devices_pb.Device, node_devices_devices_pb.Device> {
    path: "/infinimesh.node.DevicesService/ToggleBasic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_devices_devices_pb.Device>;
    requestDeserialize: grpc.deserialize<node_devices_devices_pb.Device>;
    responseSerialize: grpc.serialize<node_devices_devices_pb.Device>;
    responseDeserialize: grpc.deserialize<node_devices_devices_pb.Device>;
}
interface IDevicesServiceService_IMakeDevicesToken extends grpc.MethodDefinition<node_node_pb.DevicesTokenRequest, node_node_pb.TokenResponse> {
    path: "/infinimesh.node.DevicesService/MakeDevicesToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_node_pb.DevicesTokenRequest>;
    requestDeserialize: grpc.deserialize<node_node_pb.DevicesTokenRequest>;
    responseSerialize: grpc.serialize<node_node_pb.TokenResponse>;
    responseDeserialize: grpc.deserialize<node_node_pb.TokenResponse>;
}
interface IDevicesServiceService_IGetByToken extends grpc.MethodDefinition<node_devices_devices_pb.Device, node_devices_devices_pb.Device> {
    path: "/infinimesh.node.DevicesService/GetByToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_devices_devices_pb.Device>;
    requestDeserialize: grpc.deserialize<node_devices_devices_pb.Device>;
    responseSerialize: grpc.serialize<node_devices_devices_pb.Device>;
    responseDeserialize: grpc.deserialize<node_devices_devices_pb.Device>;
}
interface IDevicesServiceService_IGetByFingerprint extends grpc.MethodDefinition<node_devices_devices_pb.GetByFingerprintRequest, node_devices_devices_pb.Device> {
    path: "/infinimesh.node.DevicesService/GetByFingerprint";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<node_devices_devices_pb.GetByFingerprintRequest>;
    requestDeserialize: grpc.deserialize<node_devices_devices_pb.GetByFingerprintRequest>;
    responseSerialize: grpc.serialize<node_devices_devices_pb.Device>;
    responseDeserialize: grpc.deserialize<node_devices_devices_pb.Device>;
}

export const DevicesServiceService: IDevicesServiceService;

export interface IDevicesServiceServer {
    get: grpc.handleUnaryCall<node_devices_devices_pb.Device, node_devices_devices_pb.Device>;
    list: grpc.handleUnaryCall<node_node_pb.EmptyMessage, node_devices_devices_pb.Devices>;
    create: grpc.handleUnaryCall<node_devices_devices_pb.CreateRequest, node_devices_devices_pb.CreateResponse>;
    update: grpc.handleUnaryCall<node_devices_devices_pb.Device, node_devices_devices_pb.Device>;
    delete: grpc.handleUnaryCall<node_devices_devices_pb.Device, node_node_pb.DeleteResponse>;
    toggle: grpc.handleUnaryCall<node_devices_devices_pb.Device, node_devices_devices_pb.Device>;
    toggleBasic: grpc.handleUnaryCall<node_devices_devices_pb.Device, node_devices_devices_pb.Device>;
    makeDevicesToken: grpc.handleUnaryCall<node_node_pb.DevicesTokenRequest, node_node_pb.TokenResponse>;
    getByToken: grpc.handleUnaryCall<node_devices_devices_pb.Device, node_devices_devices_pb.Device>;
    getByFingerprint: grpc.handleUnaryCall<node_devices_devices_pb.GetByFingerprintRequest, node_devices_devices_pb.Device>;
}

export interface IDevicesServiceClient {
    get(request: node_devices_devices_pb.Device, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    get(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    get(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    list(request: node_node_pb.EmptyMessage, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Devices) => void): grpc.ClientUnaryCall;
    list(request: node_node_pb.EmptyMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Devices) => void): grpc.ClientUnaryCall;
    list(request: node_node_pb.EmptyMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Devices) => void): grpc.ClientUnaryCall;
    create(request: node_devices_devices_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: node_devices_devices_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: node_devices_devices_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    update(request: node_devices_devices_pb.Device, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    update(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    update(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    delete(request: node_devices_devices_pb.Device, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    toggle(request: node_devices_devices_pb.Device, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    toggle(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    toggle(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    toggleBasic(request: node_devices_devices_pb.Device, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    toggleBasic(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    toggleBasic(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    makeDevicesToken(request: node_node_pb.DevicesTokenRequest, callback: (error: grpc.ServiceError | null, response: node_node_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    makeDevicesToken(request: node_node_pb.DevicesTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_node_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    makeDevicesToken(request: node_node_pb.DevicesTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_node_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    getByToken(request: node_devices_devices_pb.Device, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    getByToken(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    getByToken(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    getByFingerprint(request: node_devices_devices_pb.GetByFingerprintRequest, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    getByFingerprint(request: node_devices_devices_pb.GetByFingerprintRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    getByFingerprint(request: node_devices_devices_pb.GetByFingerprintRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
}

export class DevicesServiceClient extends grpc.Client implements IDevicesServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: node_devices_devices_pb.Device, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public get(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public get(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public list(request: node_node_pb.EmptyMessage, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Devices) => void): grpc.ClientUnaryCall;
    public list(request: node_node_pb.EmptyMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Devices) => void): grpc.ClientUnaryCall;
    public list(request: node_node_pb.EmptyMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Devices) => void): grpc.ClientUnaryCall;
    public create(request: node_devices_devices_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: node_devices_devices_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: node_devices_devices_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public update(request: node_devices_devices_pb.Device, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public update(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public update(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public delete(request: node_devices_devices_pb.Device, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_node_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public toggle(request: node_devices_devices_pb.Device, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public toggle(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public toggle(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public toggleBasic(request: node_devices_devices_pb.Device, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public toggleBasic(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public toggleBasic(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public makeDevicesToken(request: node_node_pb.DevicesTokenRequest, callback: (error: grpc.ServiceError | null, response: node_node_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public makeDevicesToken(request: node_node_pb.DevicesTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_node_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public makeDevicesToken(request: node_node_pb.DevicesTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_node_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public getByToken(request: node_devices_devices_pb.Device, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public getByToken(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public getByToken(request: node_devices_devices_pb.Device, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public getByFingerprint(request: node_devices_devices_pb.GetByFingerprintRequest, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public getByFingerprint(request: node_devices_devices_pb.GetByFingerprintRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
    public getByFingerprint(request: node_devices_devices_pb.GetByFingerprintRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_devices_devices_pb.Device) => void): grpc.ClientUnaryCall;
}

interface IShadowServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IShadowServiceService_IGet;
    patch: IShadowServiceService_IPatch;
    streamShadow: IShadowServiceService_IStreamShadow;
}

interface IShadowServiceService_IGet extends grpc.MethodDefinition<shadow_shadow_pb.GetRequest, shadow_shadow_pb.GetResponse> {
    path: "/infinimesh.node.ShadowService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<shadow_shadow_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<shadow_shadow_pb.GetRequest>;
    responseSerialize: grpc.serialize<shadow_shadow_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<shadow_shadow_pb.GetResponse>;
}
interface IShadowServiceService_IPatch extends grpc.MethodDefinition<shadow_shadow_pb.Shadow, shadow_shadow_pb.Shadow> {
    path: "/infinimesh.node.ShadowService/Patch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<shadow_shadow_pb.Shadow>;
    requestDeserialize: grpc.deserialize<shadow_shadow_pb.Shadow>;
    responseSerialize: grpc.serialize<shadow_shadow_pb.Shadow>;
    responseDeserialize: grpc.deserialize<shadow_shadow_pb.Shadow>;
}
interface IShadowServiceService_IStreamShadow extends grpc.MethodDefinition<shadow_shadow_pb.StreamShadowRequest, shadow_shadow_pb.Shadow> {
    path: "/infinimesh.node.ShadowService/StreamShadow";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<shadow_shadow_pb.StreamShadowRequest>;
    requestDeserialize: grpc.deserialize<shadow_shadow_pb.StreamShadowRequest>;
    responseSerialize: grpc.serialize<shadow_shadow_pb.Shadow>;
    responseDeserialize: grpc.deserialize<shadow_shadow_pb.Shadow>;
}

export const ShadowServiceService: IShadowServiceService;

export interface IShadowServiceServer {
    get: grpc.handleUnaryCall<shadow_shadow_pb.GetRequest, shadow_shadow_pb.GetResponse>;
    patch: grpc.handleUnaryCall<shadow_shadow_pb.Shadow, shadow_shadow_pb.Shadow>;
    streamShadow: grpc.handleServerStreamingCall<shadow_shadow_pb.StreamShadowRequest, shadow_shadow_pb.Shadow>;
}

export interface IShadowServiceClient {
    get(request: shadow_shadow_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: shadow_shadow_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: shadow_shadow_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shadow_shadow_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: shadow_shadow_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shadow_shadow_pb.GetResponse) => void): grpc.ClientUnaryCall;
    patch(request: shadow_shadow_pb.Shadow, callback: (error: grpc.ServiceError | null, response: shadow_shadow_pb.Shadow) => void): grpc.ClientUnaryCall;
    patch(request: shadow_shadow_pb.Shadow, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shadow_shadow_pb.Shadow) => void): grpc.ClientUnaryCall;
    patch(request: shadow_shadow_pb.Shadow, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shadow_shadow_pb.Shadow) => void): grpc.ClientUnaryCall;
    streamShadow(request: shadow_shadow_pb.StreamShadowRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<shadow_shadow_pb.Shadow>;
    streamShadow(request: shadow_shadow_pb.StreamShadowRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<shadow_shadow_pb.Shadow>;
}

export class ShadowServiceClient extends grpc.Client implements IShadowServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: shadow_shadow_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: shadow_shadow_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: shadow_shadow_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shadow_shadow_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: shadow_shadow_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shadow_shadow_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public patch(request: shadow_shadow_pb.Shadow, callback: (error: grpc.ServiceError | null, response: shadow_shadow_pb.Shadow) => void): grpc.ClientUnaryCall;
    public patch(request: shadow_shadow_pb.Shadow, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shadow_shadow_pb.Shadow) => void): grpc.ClientUnaryCall;
    public patch(request: shadow_shadow_pb.Shadow, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shadow_shadow_pb.Shadow) => void): grpc.ClientUnaryCall;
    public streamShadow(request: shadow_shadow_pb.StreamShadowRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<shadow_shadow_pb.Shadow>;
    public streamShadow(request: shadow_shadow_pb.StreamShadowRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<shadow_shadow_pb.Shadow>;
}
