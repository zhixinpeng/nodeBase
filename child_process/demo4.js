// child_process.fork(modulePath[, args][, options])
var child_process = require('child_process');

// silent默认为false，子进程的stdout等从父进程继承
child_process.fork('./child.js', {
  silent: false
});

// silent为true，子进程的stdout等pipe向父进程
child_process.fork('./silentChild.js', {
  silent: true
});

// silent为true，把pipe到父进程的stdout
var child = child_process.fork('./anotherSilentChild.js', {
  silent: true
});

child.stdout.setEncoding('utf8');
child.stdout.on('data', function (data) {
  console.log(data);
})