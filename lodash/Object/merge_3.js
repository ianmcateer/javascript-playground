const _ = require('lodash');

const port = {
    connections: [],
    deleted: false,
    editables:  {
      portName: {
        editing: true,
        contentEdited: 'ians renamed port'
      }
    },
    port: {
      name: 'first name'
    }
  }

const newName = port.editables.portName.contentEdited

const result = _.merge({}, port, {name: newName});
console.log(result)

//{ connections: [],
//   deleted: false,
//   editables:
//    { portName: { editing: true, contentEdited: 'ians renamed port' } },
//   port: { name: 'first name' },
//   name: 'ians renamed port'
// }
