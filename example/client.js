'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const grpc = require('grpc')
const server = require('..')
const client = new server.HealthClient(
  'localhost:7000',
  grpc.credentials.createInsecure()
)
const statusReq = new server.SetStatusRequest()
statusReq.setService('message.service')
statusReq.setStatus(server.ServingStatus.SERVING)
client.setStatus(statusReq, (err, res) => {
  if (err) throw err
  const req = new server.HealthCheckRequest()
  req.setService('message.service')
  client.check(req, (err, ress) => {
    if (err) throw err
    console.log('[HealthStatus]: ', ress.toObject())
  })
})
