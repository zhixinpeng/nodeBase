// 向进程发送信号：process.kill(pid, signal)
console.log('hello');

process.kill(process.pid, 'SIGHUP');

console.log('world');