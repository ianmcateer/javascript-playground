const _ = require('lodash')

const connections = [
  {
    id: 0,
    name: 'first connection',
    status: 'DELETED'
  },
  {
    id: 0,
    name: 'second connection',
    status: 'DENIED'
  },
  {
    id: 0,
    name: 'third connection',
    status: 'CANCELLED'
  },
  {
    id: 0,
    name: 'second connection',
    status: 'ACTIVE'
  },
  ]

const activeConnections = _.reject(connections, (connection) => _.includes(['DELETED', 'DENIED','CANCELLED'], connection.status))
console.log(activeConnections)
