// 文件写入
// 以下代码，如果文件存在则覆盖文件内容，如果不存在则创建文件
// 异步写入

var fs = require('fs');

fs.writeFile('../extra/fileForWrite.txt', 'hello angus', 'utf8', function (err) {
  if (err) throw err;
  console.log('文件写入成功');
})