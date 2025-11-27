// package: infinimesh.node.accounts
// file: node/accounts/accounts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as node_access_access_pb from "../../node/access/access_pb";

export class Credentials extends jspb.Message { 
    getType(): string;
    setType(value: string): Credentials;

    clearDataList(): void;
    getDataList(): Array<string>;
    setDataList(value: Array<string>): Credentials;
    addData(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Credentials.AsObject;
    static toObject(includeInstance: boolean, msg: Credentials): Credentials.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Credentials, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Credentials;
    static deserializeBinaryFromReader(message: Credentials, reader: jspb.BinaryReader): Credentials;
}

export namespace Credentials {
    export type AsObject = {
        type: string,
        dataList: Array<string>,
    }
}

export class Account extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): Account;

    getTitle(): string;
    setTitle(value: string): Account;

    getEnabled(): boolean;
    setEnabled(value: boolean): Account;

    getDefaultNamespace(): string;
    setDefaultNamespace(value: string): Account;


    hasAccess(): boolean;
    clearAccess(): void;
    getAccess(): node_access_access_pb.Access | undefined;
    setAccess(value?: node_access_access_pb.Access): Account;


    getAccessCase(): Account.AccessCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Account.AsObject;
    static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Account;
    static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
    export type AsObject = {
        uuid: string,
        title: string,
        enabled: boolean,
        defaultNamespace: string,
        access?: node_access_access_pb.Access.AsObject,
    }

    export enum AccessCase {
        _ACCESS_NOT_SET = 0,
    
    ACCESS = 5,

    }

}

export class CreateRequest extends jspb.Message { 

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): Account | undefined;
    setAccount(value?: Account): CreateRequest;


    hasCredentials(): boolean;
    clearCredentials(): void;
    getCredentials(): Credentials | undefined;
    setCredentials(value?: Credentials): CreateRequest;

    getNamespace(): string;
    setNamespace(value: string): CreateRequest;


    hasAccess(): boolean;
    clearAccess(): void;
    getAccess(): number;
    setAccess(value: number): CreateRequest;


    getAccessCase(): CreateRequest.AccessCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRequest;
    static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
    export type AsObject = {
        account?: Account.AsObject,
        credentials?: Credentials.AsObject,
        namespace: string,
        access: number,
    }

    export enum AccessCase {
        _ACCESS_NOT_SET = 0,
    
    ACCESS = 4,

    }

}

export class CreateResponse extends jspb.Message { 

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): Account | undefined;
    setAccount(value?: Account): CreateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateResponse;
    static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
    export type AsObject = {
        account?: Account.AsObject,
    }
}

export class Accounts extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<Account>;
    setAccountsList(value: Array<Account>): Accounts;
    addAccounts(value?: Account, index?: number): Account;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Accounts.AsObject;
    static toObject(includeInstance: boolean, msg: Accounts): Accounts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Accounts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Accounts;
    static deserializeBinaryFromReader(message: Accounts, reader: jspb.BinaryReader): Accounts;
}

export namespace Accounts {
    export type AsObject = {
        accountsList: Array<Account.AsObject>,
    }
}
