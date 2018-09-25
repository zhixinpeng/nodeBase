// 获取文件状态
// 可以使用fs.stat()、fs.fstat()、fs.lstat()及其同步版本
// fs.stat(path, callback) fs.statSync(path)
// fs.fstat(fd, callback) fs.fstatSync(fd)
// fs.lstat(path, callback) fs.lstatSync(path)

var fs = require('fs');

var getTimeDesc = function (d) {
  return [d.getFullYear(),d.getMonth()+1,d.getDate()].join('-') + ' ' + [d.getHours(),d.getMinutes(),d.getSeconds()].join(':');
};

fs.stat('../extra/fileForWatch.txt', function (err, stats) {
  if(err) throw err;
  console.log('文件大小：' + stats.size);
  console.log('创建时间：' + getTimeDesc(stats.birthtime));
  console.log('访问时间：' + getTimeDesc(stats.atime));
  console.log('修改时间：' + getTimeDesc(stats.mtime));
})