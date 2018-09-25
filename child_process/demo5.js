// IPC
var child_process = require('child_process');

var child = child_process.fork('./child.js');

child.on('message', function (message) {
  console.log('message from child: ' + JSON.stringify(message));
});

child.send({
  from: 'parent'
});