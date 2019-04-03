'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const health_grpc_pb_1 = require('./proto/health_grpc_pb')
exports.HealthService = health_grpc_pb_1.HealthService
exports.HealthClient = health_grpc_pb_1.HealthClient
const health_pb_1 = require('./proto/health_pb')
exports.HealthCheckResponse = health_pb_1.HealthCheckResponse
exports.HealthCheckRequest = health_pb_1.HealthCheckRequest
exports.SetStatusRequest = health_pb_1.SetStatusRequest
exports.SetStatusResponse = health_pb_1.SetStatusResponse
const exception_1 = require('./utils/exception')
const ServingStatus = health_pb_1.HealthCheckResponse.ServingStatus
exports.ServingStatus = ServingStatus
const healthStatusMap = (status, baseStatus) => {
  const statusMap = Object.assign(status, baseStatus)
  const result = new Map(Object.entries(statusMap))
  return result
}
class Health {
  setStatus(call, callback) {
    const serviceName = call.request.getService()
    const serviceStatus = call.request.getStatus()
    const baseStatus = {
      '': ServingStatus.SERVING
    }
    const statusMap = {}
    statusMap[serviceName] = serviceStatus
    this.healthStatus = healthStatusMap(statusMap, baseStatus)
    const res = new health_pb_1.SetStatusResponse()
    callback(null, res)
  }
  check(call, callback) {
    const service = call.request.getService()
    if (!this.healthStatus.has(service)) {
      return callback(new exception_1.NotFound(), null)
    }
    const res = new health_pb_1.HealthCheckResponse()
    res.setStatus(this.healthStatus.get(service))
    callback(null, res)
  }
}
exports.Health = Health
//# sourceMappingURL=server.js.map
