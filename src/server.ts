import {
  IHealthServer,
  HealthService,
  HealthClient
} from './proto/health_grpc_pb'
import {
  HealthCheckResponse,
  HealthCheckRequest,
  SetStatusRequest,
  SetStatusResponse
} from './proto/health_pb'
import { ServerUnaryCall, sendUnaryData } from 'grpc'
import { NotFound } from './utils/exception'

const ServingStatus: typeof HealthCheckResponse.ServingStatus =
  HealthCheckResponse.ServingStatus

interface StringMap {
  [key: string]: HealthCheckResponse.ServingStatus
}

const healthStatusMap = (status: StringMap, baseStatus: StringMap) => {
  const statusMap = Object.assign(status, baseStatus)
  const result = new Map(Object.entries(statusMap))
  return result
}

class Health implements IHealthServer {
  public healthStatus
  public setStatus(
    call: ServerUnaryCall<SetStatusRequest>,
    callback: sendUnaryData<SetStatusResponse>
  ) {
    const serviceName = call.request.getService()
    const serviceStatus = call.request.getStatus()

    const baseStatus = {
      '': ServingStatus.SERVING
    }

    const statusMap = {}
    statusMap[serviceName] = serviceStatus
    this.healthStatus = healthStatusMap(statusMap, baseStatus)

    const res: SetStatusResponse = new SetStatusResponse()
    callback(null, res)
  }

  public check(
    call: ServerUnaryCall<HealthCheckRequest>,
    callback: sendUnaryData<HealthCheckResponse>
  ) {
    const service: string = call.request.getService()

    if (!this.healthStatus.has(service)) {
      return callback(new NotFound(), null)
    }

    const res: HealthCheckResponse = new HealthCheckResponse()
    res.setStatus(<HealthCheckResponse.ServingStatus>(
      this.healthStatus.get(service)
    ))

    callback(null, res)
  }
}

export {
  ServingStatus,
  Health,
  HealthService,
  SetStatusRequest,
  SetStatusResponse,
  HealthCheckRequest,
  HealthCheckResponse,
  HealthClient
}
