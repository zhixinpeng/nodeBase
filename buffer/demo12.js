// 填充：buf.fill(value[, offset[, end]][, encoding])
// offset：从第几位开始填充，默认是0
// end：停止填充的位置，默认是buf.length
var buff = Buffer.alloc(20).fill('a');

console.log(buff.toString());