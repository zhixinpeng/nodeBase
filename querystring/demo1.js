// querystring用来做url查询参数的解析
// querystring.parse(str[, sep[, eq[, options]]])
var querystring = require('querystring');

var str = 'nick=casper&age=24';
var obj = querystring.parse(str);
console.log(JSON.stringify(obj, null, 4))