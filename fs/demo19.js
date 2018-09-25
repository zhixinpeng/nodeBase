// 追加文件内容
// fs.appendFile(file, data[, options], callback)

var fs = require('fs');

fs.appendFile('../extra/fileForAppend.txt', 'hello', 'utf8', function (err) {
  if(err) throw err;
  console.log('append成功');
})