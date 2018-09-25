// hash例子
var crypto = require('crypto');
var fs = require('fs');

var content = fs.readFileSync('../extra/fileForAppend.txt', {
  encoding: 'utf8'
});
var hash = crypto.createHash('sha256');
var output;

hash.update(content);

output = hash.digest('hex');

console.log(output);