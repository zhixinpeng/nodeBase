var path = require('path');
var filepath = '../extra/fileForAppend.txt';

// 获取路径
console.log(path.dirname(filepath));

// 获取文件名
console.log(path.basename('/demo/js/test.js'));

console.log(path.basename('/demo/js/test/'));

console.log(path.basename('/demo/js/test'));

// 只获取文件名不获取拓展
console.log(path.basename('/demo/js/test.js', '.js'));

// 获取文件拓展名
console.log(path.extname(filepath));