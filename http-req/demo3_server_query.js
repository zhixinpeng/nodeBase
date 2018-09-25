// 服务端获取get请求参数
// 访问地址 http://127.0.0.1:3000/hello?nick=chyingp&hello=world
var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function (req, res) {
  var urlObj = url.parse(req.url);
  var query = urlObj.query;
  var queryObj = querystring.parse(query);

  console.log(JSON.stringify(queryObj));
  res.end('ok');
})

server.listen(3000);