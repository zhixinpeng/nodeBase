// 通过Buffer.from()

// Buffer.from(array)
var buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf.toString());

// Buffer.from(string[, encoding])
var buf = Buffer.from('this is angus');
// 默认编码是utf8
console.log(buf.toString());
// 编码不是utf8，可能会造成乱码
console.log(buf.toString('ascii'));

// Buffer.from(buffer)
var buff = Buffer.from('buffer');
var buff2 = Buffer.from(buff);

console.log(buff.toString());
console.log(buff2.toString());

buff2[0] = 0x61;

console.log(buff.toString());
console.log(buff2.toString());