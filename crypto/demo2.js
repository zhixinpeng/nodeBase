// hash例子
var crypto = require('crypto')
var fs = require('fs')

var input = fs.createReadStream('../extra/fileForAppend.txt', {
  encoding: 'utf8'
});
var hash = crypto.createHash('sha256');

hash.setEncoding('hex');

input.pipe(hash).pipe(process.stdout);
