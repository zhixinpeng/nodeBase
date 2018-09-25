// 文件重命名
// 同步版本
var fs = require('fs');

try {
  fs.renameSync('../extra/fileForWrite.txt', '../extra/fileForWrite1.txt');
} catch (err) {
  throw err;
}