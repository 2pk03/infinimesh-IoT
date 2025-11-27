// package: infinimesh.node.devices
// file: node/devices/devices.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as node_access_access_pb from "../../node/access/access_pb";

export class Device extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): Device;

    getTitle(): string;
    setTitle(value: string): Device;

    getEnabled(): boolean;
    setEnabled(value: boolean): Device;


    hasCertificate(): boolean;
    clearCertificate(): void;
    getCertificate(): Certificate | undefined;
    setCertificate(value?: Certificate): Device;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): Device;
    addTags(value: string, index?: number): string;

    getBasicEnabled(): boolean;
    setBasicEnabled(value: boolean): Device;

    getToken(): string;
    setToken(value: string): Device;


    hasAccess(): boolean;
    clearAccess(): void;
    getAccess(): node_access_access_pb.Access | undefined;
    setAccess(value?: node_access_access_pb.Access): Device;


    getAccessCase(): Device.AccessCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Device.AsObject;
    static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Device;
    static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
    export type AsObject = {
        uuid: string,
        title: string,
        enabled: boolean,
        certificate?: Certificate.AsObject,
        tagsList: Array<string>,
        basicEnabled: boolean,
        token: string,
        access?: node_access_access_pb.Access.AsObject,
    }

    export enum AccessCase {
        _ACCESS_NOT_SET = 0,
    
    ACCESS = 8,

    }

}

export class Certificate extends jspb.Message { 
    getPemData(): string;
    setPemData(value: string): Certificate;

    getAlgorithm(): string;
    setAlgorithm(value: string): Certificate;

    getFingerprint(): Uint8Array | string;
    getFingerprint_asU8(): Uint8Array;
    getFingerprint_asB64(): string;
    setFingerprint(value: Uint8Array | string): Certificate;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Certificate.AsObject;
    static toObject(includeInstance: boolean, msg: Certificate): Certificate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Certificate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Certificate;
    static deserializeBinaryFromReader(message: Certificate, reader: jspb.BinaryReader): Certificate;
}

export namespace Certificate {
    export type AsObject = {
        pemData: string,
        algorithm: string,
        fingerprint: Uint8Array | string,
    }
}

export class Devices extends jspb.Message { 
    clearDevicesList(): void;
    getDevicesList(): Array<Device>;
    setDevicesList(value: Array<Device>): Devices;
    addDevices(value?: Device, index?: number): Device;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Devices.AsObject;
    static toObject(includeInstance: boolean, msg: Devices): Devices.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Devices, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Devices;
    static deserializeBinaryFromReader(message: Devices, reader: jspb.BinaryReader): Devices;
}

export namespace Devices {
    export type AsObject = {
        devicesList: Array<Device.AsObject>,
    }
}

export class CreateRequest extends jspb.Message { 

    hasDevice(): boolean;
    clearDevice(): void;
    getDevice(): Device | undefined;
    setDevice(value?: Device): CreateRequest;

    getNamespace(): string;
    setNamespace(value: string): CreateRequest;


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
        device?: Device.AsObject,
        namespace: string,
    }
}

export class CreateResponse extends jspb.Message { 

    hasDevice(): boolean;
    clearDevice(): void;
    getDevice(): Device | undefined;
    setDevice(value?: Device): CreateResponse;


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
        device?: Device.AsObject,
    }
}

export class GetByFingerprintRequest extends jspb.Message { 
    getFingerprint(): Uint8Array | string;
    getFingerprint_asU8(): Uint8Array;
    getFingerprint_asB64(): string;
    setFingerprint(value: Uint8Array | string): GetByFingerprintRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByFingerprintRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByFingerprintRequest): GetByFingerprintRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByFingerprintRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByFingerprintRequest;
    static deserializeBinaryFromReader(message: GetByFingerprintRequest, reader: jspb.BinaryReader): GetByFingerprintRequest;
}

export namespace GetByFingerprintRequest {
    export type AsObject = {
        fingerprint: Uint8Array | string,
    }
}
