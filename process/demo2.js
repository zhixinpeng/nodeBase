// 异步 process.nextTick(fn)
console.log('海贼王');

process.nextTick(function () {
  console.log('火影忍者');
});

console.log('死神');

// 将fn放在node事件循环的下一个tick里
// 比setTimeout(fn,0)性能高