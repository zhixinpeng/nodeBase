// req对象是http.IncomingMessage实例，在服务端、客户端作用略有差异
// 服务端：获取请求方的相关信息，如request header等
// 客户端：获取相应方返回的相关信息，如statusCode等
var http = require('http');

var server = http.createServer(function (req, res) {
  console.log(req.headers);
  res.end('ok');
});

server.listen(3000);