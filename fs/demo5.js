// 文件写入
// 以下代码，如果文件存在则覆盖文件内容，如果不存在则创建文件
// 同步写入

var fs = require('fs');

try {
  fs.writeFileSync('../extra/fileForWriteSync.txt', 'hello world', 'utf8');
  console.log('文件写入成功')
} catch (err) {
  throw err;
}