// 文件路径分解组合
var path = require('path');

var p1 = path.format({
  root: '/tmp/',
  base: 'hello.js'
});

console.log(p1);

var p2 = path.format({
  root: '/tmp/',
  base: 'hello',
  ext: '.js'
});

console.log(p2);

console.log(path.parse('/home/user/dir/file.txt'));