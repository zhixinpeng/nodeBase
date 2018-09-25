// 创建目录
// 同步版本
var fs = require('fs');

try {
  fs.mkdirSync('../extra/angus');
  console.log('目录创建成功');
} catch (err) {
  console.log('文件已存在');
  throw err;
}