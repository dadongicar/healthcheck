import { ServiceError, status } from 'grpc'

class Exception implements ServiceError {
  public name: string = 'ServiceError'
  public code: status
  public message: string
  constructor(code: status, message?: string) {
    this.code = code
    this.message = message || 'Service Error'
  }
}

export class NotFound extends Exception {
  constructor(STATUS = status.NOT_FOUND, message = 'not found') {
    super(STATUS, message)
  }
}
