// 写：buf.write(string[, offset[, length]][, encoding])
// 将string写入buf实例，同时返回写入的字节数
var buff = Buffer.alloc(4);
buff.write('a');
console.log(buff);

buff.write('ab');
console.log(buff);