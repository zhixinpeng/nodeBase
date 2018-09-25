// 创建目录
// 异步版本
var fs = require('fs');

fs.mkdir('../extra/mkdir', function (err) {
  if (err) throw err;
  console.log('目录创建成功');
})