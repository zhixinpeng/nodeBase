// 通过监听SIGHUP事件，来组阻止默认行为
process.on('SIGHUP', () => {
  console.log('Got SIGHUP signal.');
});

console.log('hello');

process.kill(process.pid, 'SIGHUP');

console.log('world');