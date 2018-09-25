// child_process.spawn(command[, args][, options])
// 在demo1.js中示例了基本的用法
// options参数说明：
// argv0:[String]
// stdio:[Array]|[String] 子进程的stdio
// detached:[Boolean] 让子进程独立于父进程之外运行
// shell:[Boolean] 时候在shell里面运行程序
var spawn = require('child_process').spawn;
var ls = spawn('ls', ['al'], {
  stdio: 'inherit'
});

ls.on('close', function (code) {
  console.log('child exists with code: ' + code);
});