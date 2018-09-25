// 判断文件是否存在
var fs = require('fs');

fs.access('./fileForRead.txt', function (err) {
  if(err) throw err;
  console.log('fileForRead.txt存在');
})