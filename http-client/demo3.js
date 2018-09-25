// 简单的post请求
var http = require('http');
var querystring = require('querystring');

var createClientPostRequest = function () {
  var options = {
    method: 'POST',
    protocol: 'http:',
    hostname: '127.0.0.1',
    port: '3000',
    path: '/post',
    headers: {
      'connection': 'keep-alive',
      'content-type': 'application/x-www-form-urlencoded'
    }
  };

  // 发送给服务器的数据
  var postBody = {
    nick: 'angus'
  };

  // 创建客户端请求
  var client = http.request(options, function (res) {
    res.pipe(process.stdout);
  })

  // 发送的报文主体
  client.write(querystring.stringify(postBody));
  client.end();
};

// 服务端程序，只是负责回传客户端数据
var server = http.createServer(function (req,res) {
  res.write('Server got client data: ');
  req.pipe(res);
});

server.listen(3000, createClientPostRequest);