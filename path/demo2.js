// 路径组合
var path = require('path');

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

console.log(path.resolve(''));

console.log(path.resolve('.'));

console.log(path.resolve('/foo/bar', './baz'));

console.log(path.resolve('/foo/bar', './baz/'));

console.log(path.resolve('/foo/bar', '/tmp/file/'));

console.log(path.resolve('www', 'js/upload', '../mod.js'));