// package: infinimesh.node.namespaces
// file: node/namespaces/namespaces.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as node_access_access_pb from "../../node/access/access_pb";

export class Namespace extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): Namespace;

    getTitle(): string;
    setTitle(value: string): Namespace;


    hasAccess(): boolean;
    clearAccess(): void;
    getAccess(): node_access_access_pb.Access | undefined;
    setAccess(value?: node_access_access_pb.Access): Namespace;


    getAccessCase(): Namespace.AccessCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Namespace.AsObject;
    static toObject(includeInstance: boolean, msg: Namespace): Namespace.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Namespace, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Namespace;
    static deserializeBinaryFromReader(message: Namespace, reader: jspb.BinaryReader): Namespace;
}

export namespace Namespace {
    export type AsObject = {
        uuid: string,
        title: string,
        access?: node_access_access_pb.Access.AsObject,
    }

    export enum AccessCase {
        _ACCESS_NOT_SET = 0,
    
    ACCESS = 3,

    }

}

export class Namespaces extends jspb.Message { 
    clearNamespacesList(): void;
    getNamespacesList(): Array<Namespace>;
    setNamespacesList(value: Array<Namespace>): Namespaces;
    addNamespaces(value?: Namespace, index?: number): Namespace;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Namespaces.AsObject;
    static toObject(includeInstance: boolean, msg: Namespaces): Namespaces.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Namespaces, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Namespaces;
    static deserializeBinaryFromReader(message: Namespaces, reader: jspb.BinaryReader): Namespaces;
}

export namespace Namespaces {
    export type AsObject = {
        namespacesList: Array<Namespace.AsObject>,
    }
}
