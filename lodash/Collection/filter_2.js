const _ = require('lodash')

const results = [
  {
    "name": "COMPANY",
    "display": "Company",
    "icon": "building",
    "keyholder": false,
    "visible": false,
    "shieldOnly": false,
    "systemDefault": false,
    "id": "55e7ed48e7616b9606300001",
    "deletedAt": null,
    "createdAt": "2015-09-30T04:00:00.000Z",
    "updatedAt": "2016-05-16T07:40:26.999Z",
    "policyIds": [],
    "deleted": false,
    "permissions": {
      "company-actions": true,
      "company-update": true,
      "connection-create": false,
      "connection-delete": false,
      "connection-modify": false,
      "connection-read": false,
      "order-create": false,
      "order-delete": false,
      "order-modify": false,
      "order-query": false,
      "ports-edit": false,
      "ports-read": false,
      "user-moderation": false
    },
    "queryable": false,
    "permissionIds": [
      "582c0d66c6135cd40ba0223d",
      "582c0d67c6135cd40ba0225d"
    ],
    "policies": [],
  },
  {
    "name": "MEMBERS",
    "display": "Members",
    "icon": "group outline",
    "keyholder": false,
    "visible": false,
    "shieldOnly": true,
    "systemDefault": false,
    "id": "55e7ed48e7616b9606300002",
    "deletedAt": null,
    "createdAt": "2015-09-30T04:00:00.000Z",
    "updatedAt": "2018-04-24T02:24:41.425Z",
  }
  ]

//if returns true then will stay in the returned collection
//so will keep only the results where shieldOnly is set to false
const newResults = _.filter(results, { shieldOnly: false})
console.log(newResults)
