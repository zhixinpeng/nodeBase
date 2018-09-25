// process.connected：如果当前进程是子进程，且与父进程之间通过IPC通道连接着，则为true
// process.disconnected：断开与父进程之间的IPC通道，此时会将process.connected置为false
console.log('process.connected: ' + process.connected);

process.disconnect();

console.log('process.connect: ' + process.connected);