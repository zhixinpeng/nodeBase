// buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])
// 不同点：可以指定特定比较的范围；返回数为整数，对应大小关系
// 返回值为0：buf、target大小相同
// 返回值为1：buf大于target，也就是buf应该排在target之后
// 返回值为-1：buf小于target，也就是buf应该排在target之前

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('BCD');
const buf3 = Buffer.from('ABCD');

console.log(buf1.compare(buf1)); // 0

console.log(buf1.compare(buf2)); // -1

console.log(buf1.compare(buf3)); // -1

console.log(buf2.compare(buf1)); // 1

console.log(buf2.compare(buf3)); // 1

console.log([buf1,buf2,buf3].sort(Buffer.compare));