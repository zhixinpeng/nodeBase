// 通过文件流写入
var fs = require('fs');
var writeStream = fs.createWriteStream('../extra/fileForWriteStream.txt', 'utf8');

writeStream.on('close', function () {
  console.log('已经关闭');
})

writeStream.write('hello');
writeStream.write(' ');
writeStream.write('world');