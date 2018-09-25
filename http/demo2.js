// 继承与拓展
// 创建TCP服务端
// http.Server 继承了 net.Server
var net = require('net');

var PORT = 8989;
var HOST = '127.0.0.1';

var server = net.createServer(function (socket) {
  console.log('Connected: ' + socket.remoteAddress + ':' + socket.remotePort);
  socket.on('data', function (data) {
    console.log('DATA ' + socket.remoteAddress + ':' + data);
    console.log('Data is: ' + data);

    socket.write('Data from you is "' + data + '"');
  });

  socket.on('close', function () {
    console.log('CLOSED: ' + socket.remoteAddress + ' ' + socket.remotePort);
  });
});

server.listen(PORT, HOST);

console.log(server instanceof net.Server);