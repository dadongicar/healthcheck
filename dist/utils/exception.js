'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const grpc_1 = require('grpc')
class Exception {
  constructor(code, message) {
    this.name = 'ServiceError'
    this.code = code
    this.message = message || 'Service Error'
  }
}
class NotFound extends Exception {
  constructor(STATUS = grpc_1.status.NOT_FOUND, message = 'not found') {
    super(STATUS, message)
  }
}
exports.NotFound = NotFound
//# sourceMappingURL=exception.js.map
