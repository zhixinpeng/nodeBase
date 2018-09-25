// res属于http.ServerResponse类
var http = require('http');

// 设置状态码、状态描述信息、响应主体
var server = http.createServer(function (req, res) {
  res.writeHead(200, 'ok', {
    'Content-Type': 'text/plain'
  });
  res.end('hello');
});

server.listen(3000);

// 除了以上使用res.writeHead()方法，还可以使用res.statusCode、res.statusMessage
// 初次之外还有针对头部增删改查的一系列操作
// 增
// res.setHeader('Content-Type', 'text/plain');
// 删
// res.removeHeader('Content-Type');
// 改
// res.setHeader('Content-Type', 'text/plain');
// res.setHeader('Content-Type', 'text/html'); // 覆盖
// 查
// res.getHeader('content-type');

// 其中不同的是getHeader的name采用的小写，但返回值没有做特殊处理