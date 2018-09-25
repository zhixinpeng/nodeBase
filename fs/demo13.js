// 文件重命名
// 异步版本
var fs = require('fs');

fs.rename('../extra/angus', '../extra/jay', function (err) {
  if (err) throw err;
  console.log('重命名成功');
})