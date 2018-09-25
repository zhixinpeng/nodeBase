// 通过Buffer.alloc(length)创建

// 长度为10，初始值为0x0
var buf1 = Buffer.alloc(10);
console.log(buf1);

// 长度为10，初始值为0x1
var buf2 = Buffer.alloc(10, 1);
console.log(buf2);

// 长度为10，初始值不确定
var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

// 长度为3，初始值为0x01,0x02,0x03
var buf4 = Buffer.from([1, 2, 3])
console.log(buf4);