// 创建server返回http.Server实例
var http = require('http');
var requestListener = function (req, res) {
  res.end('ok');
};
var server = http.createServer(requestListener);
// var server = new http.Server(requestListener); 跟上面等价
server.listen(3000);