// dgram模块是对UDP socket的一层封装，相对net模块简单很多
// UDP服务器
var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
  var address = server.address();
  console.log('UDP Server listening on ' + address.address + ':' + address.port);
});

server.on('message', function (message, remote) {
  console.log(remote.address + ':' + remote.port + ' - ' + message);
})

server.bind(PORT, HOST);