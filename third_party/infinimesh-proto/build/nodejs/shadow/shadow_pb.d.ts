// package: infinimesh.shadow
// file: shadow/shadow.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class State extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): State;


    hasData(): boolean;
    clearData(): void;
    getData(): google_protobuf_struct_pb.Struct | undefined;
    setData(value?: google_protobuf_struct_pb.Struct): State;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): State.AsObject;
    static toObject(includeInstance: boolean, msg: State): State.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): State;
    static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
}

export namespace State {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        data?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class Shadow extends jspb.Message { 
    getDevice(): string;
    setDevice(value: string): Shadow;


    hasReported(): boolean;
    clearReported(): void;
    getReported(): State | undefined;
    setReported(value?: State): Shadow;


    hasDesired(): boolean;
    clearDesired(): void;
    getDesired(): State | undefined;
    setDesired(value?: State): Shadow;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Shadow.AsObject;
    static toObject(includeInstance: boolean, msg: Shadow): Shadow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Shadow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Shadow;
    static deserializeBinaryFromReader(message: Shadow, reader: jspb.BinaryReader): Shadow;
}

export namespace Shadow {
    export type AsObject = {
        device: string,
        reported?: State.AsObject,
        desired?: State.AsObject,
    }
}

export class GetRequest extends jspb.Message { 
    clearPoolList(): void;
    getPoolList(): Array<string>;
    setPoolList(value: Array<string>): GetRequest;
    addPool(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRequest;
    static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
    export type AsObject = {
        poolList: Array<string>,
    }
}

export class GetResponse extends jspb.Message { 
    clearShadowsList(): void;
    getShadowsList(): Array<Shadow>;
    setShadowsList(value: Array<Shadow>): GetResponse;
    addShadows(value?: Shadow, index?: number): Shadow;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResponse;
    static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
    export type AsObject = {
        shadowsList: Array<Shadow.AsObject>,
    }
}

export class StreamShadowRequest extends jspb.Message { 
    clearDevicesList(): void;
    getDevicesList(): Array<string>;
    setDevicesList(value: Array<string>): StreamShadowRequest;
    addDevices(value: string, index?: number): string;

    getOnlyDelta(): boolean;
    setOnlyDelta(value: boolean): StreamShadowRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamShadowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamShadowRequest): StreamShadowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamShadowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamShadowRequest;
    static deserializeBinaryFromReader(message: StreamShadowRequest, reader: jspb.BinaryReader): StreamShadowRequest;
}

export namespace StreamShadowRequest {
    export type AsObject = {
        devicesList: Array<string>,
        onlyDelta: boolean,
    }
}
