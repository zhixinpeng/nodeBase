// 删除文件
// 同步版本
var fs = require('fs');

try {
  fs.unlinkSync('./file');
} catch (err) {
  throw err;
}