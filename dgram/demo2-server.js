// 使用dgram实现广播功能
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var port = 3333;

server.on('message', function (message, rinfo) {
  console.log('server got message from:' + rinfo.address + ':' + rinfo.port);
});

server.bind(port);