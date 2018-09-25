// IPC相关
var child_process = require('child_process');

child_process.fork('./demo6-connectedChild.js', {
  stdio: 'inherit'
});