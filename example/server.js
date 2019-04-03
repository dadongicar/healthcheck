'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const grpc = require('grpc')
const servers = require('..')
let port = 7000
const server = new grpc.Server()
const grpcHealthCheck = new servers.Health()
server.addService(servers.HealthService, grpcHealthCheck)
server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure())
console.info('Listening on http://localhost:7000')
server.start()
