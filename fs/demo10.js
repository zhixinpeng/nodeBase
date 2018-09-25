// 删除文件
// 异步版本
var fs = require('fs');

fs.unlink('../extra/angus', function (err) {
  if(err) throw err;
  console.log('文件删除成功')
})