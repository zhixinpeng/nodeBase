// buffer比较

// buf.equals(otherBuffer)
// 判断两个buffer实例存储的数据是否相同，相同返回true

var buf1 = Buffer.from('A');
var buf2 = Buffer.from('A');

console.log(buf1.equals(buf2)); // true

var buf3 = Buffer.from('A');
var buf4 = Buffer.from('B');

console.log(buf3.equals(buf4)); // false

var buf5 = Buffer.from('ABC'); // <Buffer 41 42 43>
var buf6 = Buffer.from('414243', 'hex');

console.log(buf5.equals(buf6)); // true