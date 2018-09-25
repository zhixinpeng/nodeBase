// 修改权限
// 可以使用fs.chmod()、fs.fchmod()、fs.lchmod()及其同步版本
// fs.chmod(path, mode, callback) fs.chmodSync(path, mode)
// fs.fchmod(fd, mode, callback) fs.fchmodSync(fd, mode)
// fs.lchmod(path, mode, callback)# fs.lchmodSync(path, mode)
var fs = require('fs');

fs.chmod('../extra/fileForWatch.txt', '777', function (err) {
  if(err) console.log(err);
  console.log('权限修改成功');
})