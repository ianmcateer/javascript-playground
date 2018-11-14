const _ = require('lodash')

const someFunction = (_endpoint, _queryParams = {}, responseLocation=['results']) => {
  const endpoint = _.isString(_endpoint) ? _endpoint.replace( /^\//, '' ) : '';
  console.log(endpoint)
}

someFunction('v2/admin/roles', {}, null )
