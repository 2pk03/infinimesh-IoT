// package: infinimesh.shadow
// file: shadow/shadow.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as shadow_shadow_pb from "../shadow/shadow_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IShadowServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IShadowServiceService_IGet;
    patch: IShadowServiceService_IPatch;
    streamShadow: IShadowServiceService_IStreamShadow;
}

interface IShadowServiceService_IGet extends grpc.MethodDefinition<shadow_shadow_pb.GetRequest, shadow_shadow_pb.GetResponse> {
    path: "/infinimesh.shadow.ShadowService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<shadow_shadow_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<shadow_shadow_pb.GetRequest>;
    responseSerialize: grpc.serialize<shadow_shadow_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<shadow_shadow_pb.GetResponse>;
}
interface IShadowServiceService_IPatch extends grpc.MethodDefinition<shadow_shadow_pb.Shadow, shadow_shadow_pb.Shadow> {
    path: "/infinimesh.shadow.ShadowService/Patch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<shadow_shadow_pb.Shadow>;
    requestDeserialize: grpc.deserialize<shadow_shadow_pb.Shadow>;
    responseSerialize: grpc.serialize<shadow_shadow_pb.Shadow>;
    responseDeserialize: grpc.deserialize<shadow_shadow_pb.Shadow>;
}
interface IShadowServiceService_IStreamShadow extends grpc.MethodDefinition<shadow_shadow_pb.StreamShadowRequest, shadow_shadow_pb.Shadow> {
    path: "/infinimesh.shadow.ShadowService/StreamShadow";
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
