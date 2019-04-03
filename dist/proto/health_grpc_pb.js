// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('grpc')
var health_pb = require('./health_pb.js')

function serialize_health_HealthCheckRequest(arg) {
  if (!(arg instanceof health_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type health.HealthCheckRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_health_HealthCheckRequest(buffer_arg) {
  return health_pb.HealthCheckRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_health_HealthCheckResponse(arg) {
  if (!(arg instanceof health_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type health.HealthCheckResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_health_HealthCheckResponse(buffer_arg) {
  return health_pb.HealthCheckResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_health_SetStatusRequest(arg) {
  if (!(arg instanceof health_pb.SetStatusRequest)) {
    throw new Error('Expected argument of type health.SetStatusRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_health_SetStatusRequest(buffer_arg) {
  return health_pb.SetStatusRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_health_SetStatusResponse(arg) {
  if (!(arg instanceof health_pb.SetStatusResponse)) {
    throw new Error('Expected argument of type health.SetStatusResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_health_SetStatusResponse(buffer_arg) {
  return health_pb.SetStatusResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

var HealthService = (exports.HealthService = {
  setStatus: {
    path: '/health.Health/SetStatus',
    requestStream: false,
    responseStream: false,
    requestType: health_pb.SetStatusRequest,
    responseType: health_pb.SetStatusResponse,
    requestSerialize: serialize_health_SetStatusRequest,
    requestDeserialize: deserialize_health_SetStatusRequest,
    responseSerialize: serialize_health_SetStatusResponse,
    responseDeserialize: deserialize_health_SetStatusResponse
  },
  check: {
    path: '/health.Health/Check',
    requestStream: false,
    responseStream: false,
    requestType: health_pb.HealthCheckRequest,
    responseType: health_pb.HealthCheckResponse,
    requestSerialize: serialize_health_HealthCheckRequest,
    requestDeserialize: deserialize_health_HealthCheckRequest,
    responseSerialize: serialize_health_HealthCheckResponse,
    responseDeserialize: deserialize_health_HealthCheckResponse
  }
})

exports.HealthClient = grpc.makeGenericClientConstructor(HealthService)
