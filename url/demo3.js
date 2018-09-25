// 针对//foo/bar的处理
var url = require('url');
var str = '//foo/bar';

// var obj = url.parse(str, true, false);
var obj = url.parse(str, true, true);
console.log(obj);