// querystring.stringify(obj[, sep[, eq[, options]]])
// 相当于parse的逆向操作

var querystring = require('querystring');

var obj1 = {
  'nick': 'angus',
  'age': '24'
};
var str1 = querystring.stringify(obj1);
console.log(str1);

var obj2 = {
  name: 'angus',
  country: 'cn'
};
var str2 = querystring.stringify(obj2, '|', '-');
console.log(str2);