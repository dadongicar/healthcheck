# healthcheck
Node gRPC health check.

## get started

* install

```bash
npm i @dadongicar/grpc-healthcheck
```

## example

* server

    ```javascript
    const grpc = require('grpc')
    const servers = require('@dadongicar/grpc-healthcheck')
    let port = 7000
    const server = new grpc.Server()
    const grpcHealthCheck = new servers.Health()
    server.addService(servers.HealthService, grpcHealthCheck)
    server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure())
    console.info('Listening on http://localhost:7000')
    server.start()
    ```

* client

    ```javascript
    const grpc = require('grpc')
    const server = require('@dadongicar/grpc-healthcheck')
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
    ```
