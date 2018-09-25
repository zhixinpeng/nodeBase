// 服务端net.Server
// server.close(callback])
// 服务端正常关闭：已调用server.listen()，close事件会触发，然后callback执行，error参数为undefined
var net = require('net');
var PORT = 3000;
var HOST = '127.0.0.1';
var noop = function () {};

var server = net.createServer(noop);

server.listen(PORT, HOST, function () {
  server.close(function (error) {
    if (error) {
      console.log('close回调：服务端异常：' + error.message);
    } else {
      console.log('close回调：服务端正常关闭');
    }
  });
});

server.on('close', function () {
  console.log('close事件：服务端关闭');
})

server.on('error', function (error) {
  console.log('error事件：服务端异常：' + error.message);
})