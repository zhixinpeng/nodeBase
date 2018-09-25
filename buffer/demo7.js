// Buffer.from()
// 数组元素为数字
var buff1 = Buffer.from([62]);

console.log(buff1[0] === parseInt('3e', 16) === 62); // true

var buff2 = Buffer.from([062]);

console.log(buff2[0] === parseInt(62, 8) === 50); // true

var buff3 = Buffer.from([0x62]);

console.log(buff3[0] === parseInt(62, 16) === 98); // true