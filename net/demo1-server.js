// net模块分为两个部分
// net.Server: TCP server，内部通过socket来实现与客户端的通信
// net.Socket: tcp/本地scoket的node版本实现，实现了全双工的stream接口

// 简单的server + client例子
// TCP服务端
var net = require('net');

var PORT = 3000;
var HOST = '127.0.0.1';

var server = net.createServer(function (socket) {
  console.log('服务端：收到来自客户端的请求');

  socket.on('data', function (data) {
    console.log('服务端：收到客户端数据，内容为{' + data + '}');

    // 给客户端返回数据
    socket.write('你好，我是服务端');
  });

  socket.on('close', function () {
    console.log('服务端：客户端连接断开');
  });
});

server.listen(PORT, HOST, function () {
  console.log('服务端：开始监听来自客户端的请求');
})