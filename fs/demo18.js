// 访问/权限检测
// fs.access(path[, mode], callback)
// fs.accessSync(path[, mode])
var fs = require('fs');

fs.access('../extra/fileForWatch.txt', function (err) {
  if(err) throw err;
  console.log('可以访问');
})