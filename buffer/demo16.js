// 截取：buf.slice([start[, end]])
// 截取之后返回的Buffer实例，指向的还是buf的内存地址，所以对新Buffer实例的修改，也会影响到buf
var buff1 = Buffer.from('angus');
console.log(buff1);

var buff2 = buff1.slice();
console.log(buff2);

var buff3 = buff1.slice(1, 3);
console.log(buff3);

buff3[0] = 97;
console.log(buff1);