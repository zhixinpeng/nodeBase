// 错误处理
// 分为两种错误：命令不存在，创建子进程报错；命令存在，但运行过程报错
var spawn = require('child_process').spawn;
var child = spawn('bad_command');

child.on('error', err => {
  console.log('Failed to start child process 1.');
});

var child2 = spawn('ls', ['nonexistFile']);

child2.stderr.on('data', function (data) {
  console.log('Error message from process 2:' + data);
});

child2.on('error', err => {
  console.log('Failed to start child process 2.');
});