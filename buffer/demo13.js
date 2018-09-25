// 转成字符串: buf.toString([encoding[, start[, end]]])
var buff = Buffer.from('hello');

console.log(buff.toString());

console.log(buff.toString('utf8', 0, 2));