// HMAC即Hash-based Message Authentication CoDE，即在hash的加盐运算
// 选定hash算法，加点”盐“即可
var crypto = require('crypto');
var fs = require('fs');

var secret = 'secret';
var hmac = crypto.createHmac('sha256', secret);
var input = fs.readFileSync('../extra/fileForAppend.txt', {
  encoding: 'utf8'
});

hmac.update(input);

console.log(hmac.digest('hex'));