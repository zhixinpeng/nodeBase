// url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
// 参数值不进行解析
var url = require('url');
var str = 'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1';

var obj = url.parse(str);
console.log(obj);