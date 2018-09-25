// 创建TCP客户端
var net = require('net');

var PORT = 8989;
var HOST = '127.0.0.1';

var client = new net.Socket();
client.connect(PORT, HOST, function () {
  console.log('CONNECT TO: ' + HOST + ':' + PORT);
  // 建立连接后立即向服务器发送数据，服务器将接受到这些数据
  client.write('I am Angus!');
});

// 为客户端添加data事件处理函数
// data式服务端返回的数据
client.on('data', function (data) {
  console.log('DATA: ' + data);
  // 完全关闭连接
  client.destroy();
});

// 为客户端添加close事件处理函数
client.on('close', function () {
  console.log('Connection closed');
});