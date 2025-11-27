// package: infinimesh.node.access
// file: node/access/access.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Access extends jspb.Message { 
    getLevel(): Level;
    setLevel(value: Level): Access;

    getRole(): Role;
    setRole(value: Role): Access;


    hasNamespace(): boolean;
    clearNamespace(): void;
    getNamespace(): string;
    setNamespace(value: string): Access;


    getNamespaceCase(): Access.NamespaceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Access.AsObject;
    static toObject(includeInstance: boolean, msg: Access): Access.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Access, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Access;
    static deserializeBinaryFromReader(message: Access, reader: jspb.BinaryReader): Access;
}

export namespace Access {
    export type AsObject = {
        level: Level,
        role: Role,
        namespace: string,
    }

    export enum NamespaceCase {
        _NAMESPACE_NOT_SET = 0,
    
    NAMESPACE = 3,

    }

}

export class Node extends jspb.Message { 
    getNode(): string;
    setNode(value: string): Node;

    getParent(): string;
    setParent(value: string): Node;

    getEdge(): string;
    setEdge(value: string): Node;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Node.AsObject;
    static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Node;
    static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
    export type AsObject = {
        node: string,
        parent: string,
        edge: string,
    }
}

export class Nodes extends jspb.Message { 
    clearNodesList(): void;
    getNodesList(): Array<Node>;
    setNodesList(value: Array<Node>): Nodes;
    addNodes(value?: Node, index?: number): Node;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Nodes.AsObject;
    static toObject(includeInstance: boolean, msg: Nodes): Nodes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Nodes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Nodes;
    static deserializeBinaryFromReader(message: Nodes, reader: jspb.BinaryReader): Nodes;
}

export namespace Nodes {
    export type AsObject = {
        nodesList: Array<Node.AsObject>,
    }
}

export enum Level {
    NONE = 0,
    READ = 1,
    MGMT = 2,
    ADMIN = 3,
    ROOT = 4,
}

export enum Role {
    UNSET = 0,
    OWNER = 1,
}
