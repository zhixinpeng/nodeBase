// 服务端异常关闭：未调用server.listen()，close事件触发，然后callback执行，error为具体的错误信息。（error事件没有触发）
var net = require('net');
var PORT = 3000;
var HOST = '127.0.0.1';
var noop = function () {};

var server = net.createServer(noop);

// 没有正式启动请求监听
// server.listen(PORT, HOST);

server.on('close', function () {
  console.log('close事件：服务端关闭');
})

server.on('error', function (error) {
  console.log('error事件：服务端异常：' + error.message);
})

server.close(function (error) {
  if(error){
    console.log('close回调：服务端异常：' + error.message);
  }else{
    console.log('close回调：服务端正常关闭');
  }
});