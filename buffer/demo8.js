// Buffer.concat(list[,totalLength])
var buff1 = Buffer.alloc(10);
var buff2 = Buffer.alloc(20);

var totalLength = buff1.length + buff2.length;

console.log(totalLength); // 30

var buff3 = Buffer.concat([buff1, buff2], totalLength);

console.log(buff3.length); // 30