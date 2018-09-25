// 使用dgram实现广播功能
var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var message = Buffer.from('hello world');
var port = 3333;
var host = '255.255.255.255';

client.bind(function () {
  client.setBroadcast(true);
  client.send(message, port, host, function (err) {
    if (err) throw err;
    console.log('message has been sent');
    client.close();
  });
});