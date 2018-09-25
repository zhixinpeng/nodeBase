// execArgv
// 设置execArgv是为了让父子进程保持相同的执行环境
var child_process = require('child_process');

console.log('parent execArgv: ' + process.execArgv);

child_process.fork('./demo6-child.js', {
  execArgv: process.execArgv
});