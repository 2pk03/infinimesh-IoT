// package: infinimesh.node
// file: node/node.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as node_accounts_accounts_pb from "../node/accounts/accounts_pb";
import * as node_access_access_pb from "../node/access/access_pb";
import * as node_namespaces_namespaces_pb from "../node/namespaces/namespaces_pb";
import * as node_devices_devices_pb from "../node/devices/devices_pb";
import * as shadow_shadow_pb from "../shadow/shadow_pb";

export class TokenRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): node_accounts_accounts_pb.Credentials | undefined;
    setAuth(value?: node_accounts_accounts_pb.Credentials): TokenRequest;

    getExp(): number;
    setExp(value: number): TokenRequest;


    hasUuid(): boolean;
    clearUuid(): void;
    getUuid(): string;
    setUuid(value: string): TokenRequest;


    getUuidCase(): TokenRequest.UuidCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TokenRequest): TokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenRequest;
    static deserializeBinaryFromReader(message: TokenRequest, reader: jspb.BinaryReader): TokenRequest;
}

export namespace TokenRequest {
    export type AsObject = {
        auth?: node_accounts_accounts_pb.Credentials.AsObject,
        exp: number,
        uuid: string,
    }

    export enum UuidCase {
        _UUID_NOT_SET = 0,
    
    UUID = 3,

    }

}

export class TokenResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): TokenResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TokenResponse): TokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenResponse;
    static deserializeBinaryFromReader(message: TokenResponse, reader: jspb.BinaryReader): TokenResponse;
}

export namespace TokenResponse {
    export type AsObject = {
        token: string,
    }
}

export class SetCredentialsRequest extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): SetCredentialsRequest;


    hasCredentials(): boolean;
    clearCredentials(): void;
    getCredentials(): node_accounts_accounts_pb.Credentials | undefined;
    setCredentials(value?: node_accounts_accounts_pb.Credentials): SetCredentialsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetCredentialsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetCredentialsRequest): SetCredentialsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetCredentialsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetCredentialsRequest;
    static deserializeBinaryFromReader(message: SetCredentialsRequest, reader: jspb.BinaryReader): SetCredentialsRequest;
}

export namespace SetCredentialsRequest {
    export type AsObject = {
        uuid: string,
        credentials?: node_accounts_accounts_pb.Credentials.AsObject,
    }
}

export class SetCredentialsResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetCredentialsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetCredentialsResponse): SetCredentialsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetCredentialsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetCredentialsResponse;
    static deserializeBinaryFromReader(message: SetCredentialsResponse, reader: jspb.BinaryReader): SetCredentialsResponse;
}

export namespace SetCredentialsResponse {
    export type AsObject = {
    }
}

export class DeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResponse;
    static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
    export type AsObject = {
    }
}

export class EmptyMessage extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyMessage.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyMessage): EmptyMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyMessage;
    static deserializeBinaryFromReader(message: EmptyMessage, reader: jspb.BinaryReader): EmptyMessage;
}

export namespace EmptyMessage {
    export type AsObject = {
    }
}

export class JoinRequest extends jspb.Message { 
    getNamespace(): string;
    setNamespace(value: string): JoinRequest;

    getAccount(): string;
    setAccount(value: string): JoinRequest;

    getAccess(): node_access_access_pb.Level;
    setAccess(value: node_access_access_pb.Level): JoinRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JoinRequest): JoinRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinRequest;
    static deserializeBinaryFromReader(message: JoinRequest, reader: jspb.BinaryReader): JoinRequest;
}

export namespace JoinRequest {
    export type AsObject = {
        namespace: string,
        account: string,
        access: node_access_access_pb.Level,
    }
}

export class DevicesTokenRequest extends jspb.Message { 
    clearDevicesList(): void;
    getDevicesList(): Array<string>;
    setDevicesList(value: Array<string>): DevicesTokenRequest;
    addDevices(value: string, index?: number): string;

    getExp(): number;
    setExp(value: number): DevicesTokenRequest;

    getPost(): boolean;
    setPost(value: boolean): DevicesTokenRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DevicesTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DevicesTokenRequest): DevicesTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DevicesTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DevicesTokenRequest;
    static deserializeBinaryFromReader(message: DevicesTokenRequest, reader: jspb.BinaryReader): DevicesTokenRequest;
}

export namespace DevicesTokenRequest {
    export type AsObject = {
        devicesList: Array<string>,
        exp: number,
        post: boolean,
    }
}
