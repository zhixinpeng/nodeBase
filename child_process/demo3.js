// child_process.execFile(file[, args][, options][, callback])
// file可以是文件的名字或者路径
var child_process = require('child_process');

child_process.execFile('node', ['--version'], function (error, stdout, stderr) {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

// exec()与execFile()最大的区别在于是否创建了shell