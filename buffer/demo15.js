// 遍历：buf.values()、buf.keys()、buf.entries()
var buff = Buffer.from('angus');

for (const key of buff.keys()) {
  console.log('key is %d', key);
}

for (const value of buff.values()) {
  console.log('value is %d', value);
}

for (const pair of buff.entries()) {
  console.log('buff[%d] === %d', pair[0], pair[1]);
}