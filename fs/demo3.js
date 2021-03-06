// 通过文件流读取
var fs = require('fs');
var readStream = fs.createReadStream('../extra/fileForRead.txt', 'utf8');

readStream
  .on('data', function (chunk) {
    console.log('读取数据：' + chunk);
  })
  .on('error', function (err) {
    console.log('出错：' + err.message);
  })
  .on('end', function () {
    console.log('没有数据了');
  })
  .on('close', function () {
    console.log('已经关闭');
  })