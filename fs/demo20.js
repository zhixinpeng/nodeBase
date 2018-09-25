// 删除目录
// fs.rmdir(path, callback) fs.rmdirSync(path)
var fs = require('fs');

fs.rmdir('../extra/jay', function (err) {
  if(err) throw err;
  console.log('目录删除成功');
})