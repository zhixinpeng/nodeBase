// 计时
// 通过console.time(label)和console.timeEnd(label)来打印出两个时间点之间的时间差
var timeLabel = 'hello';

console.time(timeLabel);

setTimeout(console.timeEnd, 1000, timeLabel);