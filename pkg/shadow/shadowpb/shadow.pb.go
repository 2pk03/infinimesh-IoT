//--------------------------------------------------------------------------
// Copyright 2018 infinimesh
// www.infinimesh.io
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//--------------------------------------------------------------------------

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.18.1
// source: pkg/shadow/shadowpb/shadow.proto

package shadowpb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	structpb "google.golang.org/protobuf/types/known/structpb"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type VersionedValue struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Version   uint64                 `protobuf:"varint,1,opt,name=version,proto3" json:"version,omitempty"`
	Data      *structpb.Value        `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	Timestamp *timestamppb.Timestamp `protobuf:"bytes,3,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
}

func (x *VersionedValue) Reset() {
	*x = VersionedValue{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VersionedValue) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VersionedValue) ProtoMessage() {}

func (x *VersionedValue) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VersionedValue.ProtoReflect.Descriptor instead.
func (*VersionedValue) Descriptor() ([]byte, []int) {
	return file_pkg_shadow_shadowpb_shadow_proto_rawDescGZIP(), []int{0}
}

func (x *VersionedValue) GetVersion() uint64 {
	if x != nil {
		return x.Version
	}
	return 0
}

func (x *VersionedValue) GetData() *structpb.Value {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *VersionedValue) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

type GetRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetRequest) Reset() {
	*x = GetRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetRequest) ProtoMessage() {}

func (x *GetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetRequest.ProtoReflect.Descriptor instead.
func (*GetRequest) Descriptor() ([]byte, []int) {
	return file_pkg_shadow_shadowpb_shadow_proto_rawDescGZIP(), []int{1}
}

func (x *GetRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type GetResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Shadow *Shadow `protobuf:"bytes,1,opt,name=shadow,proto3" json:"shadow,omitempty"`
}

func (x *GetResponse) Reset() {
	*x = GetResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetResponse) ProtoMessage() {}

func (x *GetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetResponse.ProtoReflect.Descriptor instead.
func (*GetResponse) Descriptor() ([]byte, []int) {
	return file_pkg_shadow_shadowpb_shadow_proto_rawDescGZIP(), []int{2}
}

func (x *GetResponse) GetShadow() *Shadow {
	if x != nil {
		return x.Shadow
	}
	return nil
}

type Empty struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *Empty) Reset() {
	*x = Empty{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Empty) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Empty) ProtoMessage() {}

func (x *Empty) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Empty.ProtoReflect.Descriptor instead.
func (*Empty) Descriptor() ([]byte, []int) {
	return file_pkg_shadow_shadowpb_shadow_proto_rawDescGZIP(), []int{3}
}

type GetMultipleResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pool map[string]*Shadow `protobuf:"bytes,1,rep,name=pool,proto3" json:"pool,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *GetMultipleResponse) Reset() {
	*x = GetMultipleResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMultipleResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMultipleResponse) ProtoMessage() {}

func (x *GetMultipleResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMultipleResponse.ProtoReflect.Descriptor instead.
func (*GetMultipleResponse) Descriptor() ([]byte, []int) {
	return file_pkg_shadow_shadowpb_shadow_proto_rawDescGZIP(), []int{4}
}

func (x *GetMultipleResponse) GetPool() map[string]*Shadow {
	if x != nil {
		return x.Pool
	}
	return nil
}

type Shadow struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Config   *VersionedValue `protobuf:"bytes,2,opt,name=config,proto3" json:"config,omitempty"`
	Reported *VersionedValue `protobuf:"bytes,3,opt,name=reported,proto3" json:"reported,omitempty"`
	Desired  *VersionedValue `protobuf:"bytes,4,opt,name=desired,proto3" json:"desired,omitempty"`
}

func (x *Shadow) Reset() {
	*x = Shadow{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Shadow) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Shadow) ProtoMessage() {}

func (x *Shadow) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Shadow.ProtoReflect.Descriptor instead.
func (*Shadow) Descriptor() ([]byte, []int) {
	return file_pkg_shadow_shadowpb_shadow_proto_rawDescGZIP(), []int{5}
}

func (x *Shadow) GetConfig() *VersionedValue {
	if x != nil {
		return x.Config
	}
	return nil
}

func (x *Shadow) GetReported() *VersionedValue {
	if x != nil {
		return x.Reported
	}
	return nil
}

func (x *Shadow) GetDesired() *VersionedValue {
	if x != nil {
		return x.Desired
	}
	return nil
}

type PatchDesiredStateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   string          `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Data *structpb.Value `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *PatchDesiredStateRequest) Reset() {
	*x = PatchDesiredStateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PatchDesiredStateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PatchDesiredStateRequest) ProtoMessage() {}

func (x *PatchDesiredStateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PatchDesiredStateRequest.ProtoReflect.Descriptor instead.
func (*PatchDesiredStateRequest) Descriptor() ([]byte, []int) {
	return file_pkg_shadow_shadowpb_shadow_proto_rawDescGZIP(), []int{6}
}

func (x *PatchDesiredStateRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *PatchDesiredStateRequest) GetData() *structpb.Value {
	if x != nil {
		return x.Data
	}
	return nil
}

type PatchDesiredStateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *PatchDesiredStateResponse) Reset() {
	*x = PatchDesiredStateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PatchDesiredStateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PatchDesiredStateResponse) ProtoMessage() {}

func (x *PatchDesiredStateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PatchDesiredStateResponse.ProtoReflect.Descriptor instead.
func (*PatchDesiredStateResponse) Descriptor() ([]byte, []int) {
	return file_pkg_shadow_shadowpb_shadow_proto_rawDescGZIP(), []int{7}
}

type StreamReportedStateChangesRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	OnlyDelta bool   `protobuf:"varint,2,opt,name=only_delta,json=onlyDelta,proto3" json:"only_delta,omitempty"`
}

func (x *StreamReportedStateChangesRequest) Reset() {
	*x = StreamReportedStateChangesRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StreamReportedStateChangesRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StreamReportedStateChangesRequest) ProtoMessage() {}

func (x *StreamReportedStateChangesRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StreamReportedStateChangesRequest.ProtoReflect.Descriptor instead.
func (*StreamReportedStateChangesRequest) Descriptor() ([]byte, []int) {
	return file_pkg_shadow_shadowpb_shadow_proto_rawDescGZIP(), []int{8}
}

func (x *StreamReportedStateChangesRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *StreamReportedStateChangesRequest) GetOnlyDelta() bool {
	if x != nil {
		return x.OnlyDelta
	}
	return false
}

type StreamReportedStateChangesResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Device        string          `protobuf:"bytes,1,opt,name=device,proto3" json:"device,omitempty"`
	ReportedState *VersionedValue `protobuf:"bytes,2,opt,name=reportedState,proto3" json:"reportedState,omitempty"`
	DesiredState  *VersionedValue `protobuf:"bytes,3,opt,name=desiredState,proto3" json:"desiredState,omitempty"`
}

func (x *StreamReportedStateChangesResponse) Reset() {
	*x = StreamReportedStateChangesResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StreamReportedStateChangesResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StreamReportedStateChangesResponse) ProtoMessage() {}

func (x *StreamReportedStateChangesResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_shadow_shadowpb_shadow_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StreamReportedStateChangesResponse.ProtoReflect.Descriptor instead.
func (*StreamReportedStateChangesResponse) Descriptor() ([]byte, []int) {
	return file_pkg_shadow_shadowpb_shadow_proto_rawDescGZIP(), []int{9}
}

func (x *StreamReportedStateChangesResponse) GetDevice() string {
	if x != nil {
		return x.Device
	}
	return ""
}

func (x *StreamReportedStateChangesResponse) GetReportedState() *VersionedValue {
	if x != nil {
		return x.ReportedState
	}
	return nil
}

func (x *StreamReportedStateChangesResponse) GetDesiredState() *VersionedValue {
	if x != nil {
		return x.DesiredState
	}
	return nil
}

var File_pkg_shadow_shadowpb_shadow_proto protoreflect.FileDescriptor

var file_pkg_shadow_shadowpb_shadow_proto_rawDesc = []byte{
	0x0a, 0x20, 0x70, 0x6b, 0x67, 0x2f, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x2f, 0x73, 0x68, 0x61,
	0x64, 0x6f, 0x77, 0x70, 0x62, 0x2f, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x11, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x73,
	0x68, 0x61, 0x64, 0x6f, 0x77, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x90, 0x01, 0x0a, 0x0e, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e,
	0x65, 0x64, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69,
	0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f,
	0x6e, 0x12, 0x2a, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x12, 0x38, 0x0a,
	0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x74, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x22, 0x1c, 0x0a, 0x0a, 0x47, 0x65, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x40, 0x0a, 0x0b, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x31, 0x0a, 0x06, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73,
	0x68, 0x2e, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x2e, 0x53, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x52,
	0x06, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x22, 0x07, 0x0a, 0x05, 0x45, 0x6d, 0x70, 0x74, 0x79,
	0x22, 0xaf, 0x01, 0x0a, 0x13, 0x47, 0x65, 0x74, 0x4d, 0x75, 0x6c, 0x74, 0x69, 0x70, 0x6c, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x44, 0x0a, 0x04, 0x70, 0x6f, 0x6f, 0x6c,
	0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x30, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d,
	0x65, 0x73, 0x68, 0x2e, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x75,
	0x6c, 0x74, 0x69, 0x70, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e, 0x50,
	0x6f, 0x6f, 0x6c, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x70, 0x6f, 0x6f, 0x6c, 0x1a, 0x52,
	0x0a, 0x09, 0x50, 0x6f, 0x6f, 0x6c, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b,
	0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x2f, 0x0a,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x69,
	0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77,
	0x2e, 0x53, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02,
	0x38, 0x01, 0x22, 0xbf, 0x01, 0x0a, 0x06, 0x53, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x12, 0x39, 0x0a,
	0x06, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e,
	0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x73, 0x68, 0x61, 0x64, 0x6f,
	0x77, 0x2e, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x65, 0x64, 0x56, 0x61, 0x6c, 0x75, 0x65,
	0x52, 0x06, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x12, 0x3d, 0x0a, 0x08, 0x72, 0x65, 0x70, 0x6f,
	0x72, 0x74, 0x65, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x69, 0x6e, 0x66,
	0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x2e, 0x56,
	0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x65, 0x64, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x08, 0x72,
	0x65, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x12, 0x3b, 0x0a, 0x07, 0x64, 0x65, 0x73, 0x69, 0x72,
	0x65, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e,
	0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x2e, 0x56, 0x65, 0x72,
	0x73, 0x69, 0x6f, 0x6e, 0x65, 0x64, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x07, 0x64, 0x65, 0x73,
	0x69, 0x72, 0x65, 0x64, 0x22, 0x56, 0x0a, 0x18, 0x50, 0x61, 0x74, 0x63, 0x68, 0x44, 0x65, 0x73,
	0x69, 0x72, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64,
	0x12, 0x2a, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x1b, 0x0a, 0x19,
	0x50, 0x61, 0x74, 0x63, 0x68, 0x44, 0x65, 0x73, 0x69, 0x72, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74,
	0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x52, 0x0a, 0x21, 0x53, 0x74, 0x72,
	0x65, 0x61, 0x6d, 0x52, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65,
	0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1d,
	0x0a, 0x0a, 0x6f, 0x6e, 0x6c, 0x79, 0x5f, 0x64, 0x65, 0x6c, 0x74, 0x61, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x08, 0x52, 0x09, 0x6f, 0x6e, 0x6c, 0x79, 0x44, 0x65, 0x6c, 0x74, 0x61, 0x22, 0xcc, 0x01,
	0x0a, 0x22, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64,
	0x53, 0x74, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x12, 0x47, 0x0a, 0x0d,
	0x72, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68,
	0x2e, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x2e, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x65,
	0x64, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0d, 0x72, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64,
	0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x45, 0x0a, 0x0c, 0x64, 0x65, 0x73, 0x69, 0x72, 0x65, 0x64,
	0x53, 0x74, 0x61, 0x74, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x69, 0x6e,
	0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x2e,
	0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x65, 0x64, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0c,
	0x64, 0x65, 0x73, 0x69, 0x72, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x32, 0x9e, 0x03, 0x0a,
	0x07, 0x53, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x73, 0x12, 0x44, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12,
	0x1d, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x73, 0x68, 0x61,
	0x64, 0x6f, 0x77, 0x2e, 0x47, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e,
	0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x73, 0x68, 0x61, 0x64,
	0x6f, 0x77, 0x2e, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4f,
	0x0a, 0x0b, 0x47, 0x65, 0x74, 0x4d, 0x75, 0x6c, 0x74, 0x69, 0x70, 0x6c, 0x65, 0x12, 0x18, 0x2e,
	0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x73, 0x68, 0x61, 0x64, 0x6f,
	0x77, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x1a, 0x26, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69,
	0x6d, 0x65, 0x73, 0x68, 0x2e, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x2e, 0x47, 0x65, 0x74, 0x4d,
	0x75, 0x6c, 0x74, 0x69, 0x70, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x6e, 0x0a, 0x11, 0x50, 0x61, 0x74, 0x63, 0x68, 0x44, 0x65, 0x73, 0x69, 0x72, 0x65, 0x64, 0x53,
	0x74, 0x61, 0x74, 0x65, 0x12, 0x2b, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73,
	0x68, 0x2e, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x2e, 0x50, 0x61, 0x74, 0x63, 0x68, 0x44, 0x65,
	0x73, 0x69, 0x72, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x2c, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x73,
	0x68, 0x61, 0x64, 0x6f, 0x77, 0x2e, 0x50, 0x61, 0x74, 0x63, 0x68, 0x44, 0x65, 0x73, 0x69, 0x72,
	0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x8b, 0x01, 0x0a, 0x1a, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65, 0x70, 0x6f, 0x72, 0x74,
	0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x12, 0x34,
	0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x73, 0x68, 0x61, 0x64,
	0x6f, 0x77, 0x2e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x65,
	0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x35, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73,
	0x68, 0x2e, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x2e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52,
	0x65, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61, 0x6e,
	0x67, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x30, 0x01, 0x42, 0xbf, 0x01,
	0x0a, 0x15, 0x63, 0x6f, 0x6d, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68,
	0x2e, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x42, 0x0b, 0x53, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x50,
	0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x69, 0x6e,
	0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x73, 0x68, 0x61,
	0x64, 0x6f, 0x77, 0x2f, 0x73, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x70, 0x62, 0xa2, 0x02, 0x03, 0x49,
	0x53, 0x58, 0xaa, 0x02, 0x11, 0x49, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e,
	0x53, 0x68, 0x61, 0x64, 0x6f, 0x77, 0xca, 0x02, 0x11, 0x49, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d,
	0x65, 0x73, 0x68, 0x5c, 0x53, 0x68, 0x61, 0x64, 0x6f, 0x77, 0xe2, 0x02, 0x1d, 0x49, 0x6e, 0x66,
	0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x5c, 0x53, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x5c, 0x47,
	0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x12, 0x49, 0x6e, 0x66,
	0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x3a, 0x3a, 0x53, 0x68, 0x61, 0x64, 0x6f, 0x77, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pkg_shadow_shadowpb_shadow_proto_rawDescOnce sync.Once
	file_pkg_shadow_shadowpb_shadow_proto_rawDescData = file_pkg_shadow_shadowpb_shadow_proto_rawDesc
)

func file_pkg_shadow_shadowpb_shadow_proto_rawDescGZIP() []byte {
	file_pkg_shadow_shadowpb_shadow_proto_rawDescOnce.Do(func() {
		file_pkg_shadow_shadowpb_shadow_proto_rawDescData = protoimpl.X.CompressGZIP(file_pkg_shadow_shadowpb_shadow_proto_rawDescData)
	})
	return file_pkg_shadow_shadowpb_shadow_proto_rawDescData
}

var file_pkg_shadow_shadowpb_shadow_proto_msgTypes = make([]protoimpl.MessageInfo, 11)
var file_pkg_shadow_shadowpb_shadow_proto_goTypes = []interface{}{
	(*VersionedValue)(nil),                     // 0: infinimesh.shadow.VersionedValue
	(*GetRequest)(nil),                         // 1: infinimesh.shadow.GetRequest
	(*GetResponse)(nil),                        // 2: infinimesh.shadow.GetResponse
	(*Empty)(nil),                              // 3: infinimesh.shadow.Empty
	(*GetMultipleResponse)(nil),                // 4: infinimesh.shadow.GetMultipleResponse
	(*Shadow)(nil),                             // 5: infinimesh.shadow.Shadow
	(*PatchDesiredStateRequest)(nil),           // 6: infinimesh.shadow.PatchDesiredStateRequest
	(*PatchDesiredStateResponse)(nil),          // 7: infinimesh.shadow.PatchDesiredStateResponse
	(*StreamReportedStateChangesRequest)(nil),  // 8: infinimesh.shadow.StreamReportedStateChangesRequest
	(*StreamReportedStateChangesResponse)(nil), // 9: infinimesh.shadow.StreamReportedStateChangesResponse
	nil,                           // 10: infinimesh.shadow.GetMultipleResponse.PoolEntry
	(*structpb.Value)(nil),        // 11: google.protobuf.Value
	(*timestamppb.Timestamp)(nil), // 12: google.protobuf.Timestamp
}
var file_pkg_shadow_shadowpb_shadow_proto_depIdxs = []int32{
	11, // 0: infinimesh.shadow.VersionedValue.data:type_name -> google.protobuf.Value
	12, // 1: infinimesh.shadow.VersionedValue.timestamp:type_name -> google.protobuf.Timestamp
	5,  // 2: infinimesh.shadow.GetResponse.shadow:type_name -> infinimesh.shadow.Shadow
	10, // 3: infinimesh.shadow.GetMultipleResponse.pool:type_name -> infinimesh.shadow.GetMultipleResponse.PoolEntry
	0,  // 4: infinimesh.shadow.Shadow.config:type_name -> infinimesh.shadow.VersionedValue
	0,  // 5: infinimesh.shadow.Shadow.reported:type_name -> infinimesh.shadow.VersionedValue
	0,  // 6: infinimesh.shadow.Shadow.desired:type_name -> infinimesh.shadow.VersionedValue
	11, // 7: infinimesh.shadow.PatchDesiredStateRequest.data:type_name -> google.protobuf.Value
	0,  // 8: infinimesh.shadow.StreamReportedStateChangesResponse.reportedState:type_name -> infinimesh.shadow.VersionedValue
	0,  // 9: infinimesh.shadow.StreamReportedStateChangesResponse.desiredState:type_name -> infinimesh.shadow.VersionedValue
	5,  // 10: infinimesh.shadow.GetMultipleResponse.PoolEntry.value:type_name -> infinimesh.shadow.Shadow
	1,  // 11: infinimesh.shadow.Shadows.Get:input_type -> infinimesh.shadow.GetRequest
	3,  // 12: infinimesh.shadow.Shadows.GetMultiple:input_type -> infinimesh.shadow.Empty
	6,  // 13: infinimesh.shadow.Shadows.PatchDesiredState:input_type -> infinimesh.shadow.PatchDesiredStateRequest
	8,  // 14: infinimesh.shadow.Shadows.StreamReportedStateChanges:input_type -> infinimesh.shadow.StreamReportedStateChangesRequest
	2,  // 15: infinimesh.shadow.Shadows.Get:output_type -> infinimesh.shadow.GetResponse
	4,  // 16: infinimesh.shadow.Shadows.GetMultiple:output_type -> infinimesh.shadow.GetMultipleResponse
	7,  // 17: infinimesh.shadow.Shadows.PatchDesiredState:output_type -> infinimesh.shadow.PatchDesiredStateResponse
	9,  // 18: infinimesh.shadow.Shadows.StreamReportedStateChanges:output_type -> infinimesh.shadow.StreamReportedStateChangesResponse
	15, // [15:19] is the sub-list for method output_type
	11, // [11:15] is the sub-list for method input_type
	11, // [11:11] is the sub-list for extension type_name
	11, // [11:11] is the sub-list for extension extendee
	0,  // [0:11] is the sub-list for field type_name
}

func init() { file_pkg_shadow_shadowpb_shadow_proto_init() }
func file_pkg_shadow_shadowpb_shadow_proto_init() {
	if File_pkg_shadow_shadowpb_shadow_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pkg_shadow_shadowpb_shadow_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VersionedValue); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_shadow_shadowpb_shadow_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_shadow_shadowpb_shadow_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_shadow_shadowpb_shadow_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Empty); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_shadow_shadowpb_shadow_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMultipleResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_shadow_shadowpb_shadow_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Shadow); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_shadow_shadowpb_shadow_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PatchDesiredStateRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_shadow_shadowpb_shadow_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PatchDesiredStateResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_shadow_shadowpb_shadow_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StreamReportedStateChangesRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_shadow_shadowpb_shadow_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StreamReportedStateChangesResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_pkg_shadow_shadowpb_shadow_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   11,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_pkg_shadow_shadowpb_shadow_proto_goTypes,
		DependencyIndexes: file_pkg_shadow_shadowpb_shadow_proto_depIdxs,
		MessageInfos:      file_pkg_shadow_shadowpb_shadow_proto_msgTypes,
	}.Build()
	File_pkg_shadow_shadowpb_shadow_proto = out.File
	file_pkg_shadow_shadowpb_shadow_proto_rawDesc = nil
	file_pkg_shadow_shadowpb_shadow_proto_goTypes = nil
	file_pkg_shadow_shadowpb_shadow_proto_depIdxs = nil
}
