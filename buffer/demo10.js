// 查找 buf.indexOf(value[, byteOffset][, encoding])
const buf = Buffer.from('this is a buffer');

console.log(buf.indexOf('this')); // 0

console.log(buf.indexOf('is')); // 2

console.log(buf.indexOf(Buffer.from('a buffer'))); // 8

console.log(buf.indexOf(97)); // 8

console.log(buf.indexOf(Buffer.from('a buffer example'))); // -1

console.log(buf.indexOf(Buffer.from('a buffer example').slice(0, 8))); // 8

const utf16Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'ucs2');

console.log(utf16Buffer.indexOf('\u03a3', 0, 'ucs2')); // 4

console.log(utf16Buffer.indexOf('\u03a3', -4, 'ucs2')); // 6