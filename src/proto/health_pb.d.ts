// package: health
// file: health.proto

/* tslint:disable */

import * as jspb from 'google-protobuf'

export class HealthCheckRequest extends jspb.Message {
  getService(): string
  setService(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): HealthCheckRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: HealthCheckRequest
  ): HealthCheckRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: HealthCheckRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): HealthCheckRequest
  static deserializeBinaryFromReader(
    message: HealthCheckRequest,
    reader: jspb.BinaryReader
  ): HealthCheckRequest
}

export namespace HealthCheckRequest {
  export type AsObject = {
    service: string
  }
}

export class HealthCheckResponse extends jspb.Message {
  getStatus(): HealthCheckResponse.ServingStatus
  setStatus(value: HealthCheckResponse.ServingStatus): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): HealthCheckResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: HealthCheckResponse
  ): HealthCheckResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: HealthCheckResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): HealthCheckResponse
  static deserializeBinaryFromReader(
    message: HealthCheckResponse,
    reader: jspb.BinaryReader
  ): HealthCheckResponse
}

export namespace HealthCheckResponse {
  export type AsObject = {
    status: HealthCheckResponse.ServingStatus
  }

  export enum ServingStatus {
    UNKNOWN = 0,
    SERVING = 1,
    NOT_SERVING = 2
  }
}

export class SetStatusRequest extends jspb.Message {
  getService(): string
  setService(value: string): void

  getStatus(): SetStatusRequest.ServingStatus
  setStatus(value: SetStatusRequest.ServingStatus): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): SetStatusRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: SetStatusRequest
  ): SetStatusRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: SetStatusRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): SetStatusRequest
  static deserializeBinaryFromReader(
    message: SetStatusRequest,
    reader: jspb.BinaryReader
  ): SetStatusRequest
}

export namespace SetStatusRequest {
  export type AsObject = {
    service: string
    status: SetStatusRequest.ServingStatus
  }

  export enum ServingStatus {
    UNKNOWN = 0,
    SERVING = 1,
    NOT_SERVING = 2
  }
}

export class SetStatusResponse extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): SetStatusResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: SetStatusResponse
  ): SetStatusResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: SetStatusResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): SetStatusResponse
  static deserializeBinaryFromReader(
    message: SetStatusResponse,
    reader: jspb.BinaryReader
  ): SetStatusResponse
}

export namespace SetStatusResponse {
  export type AsObject = {}
}
