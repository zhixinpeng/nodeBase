// 服务端gzip压缩
var http = require('http');
var zlib = require('zlib');
var fs = require('fs');
var filePath = '../extra/fileForGzip.html';

var server = http.createServer(function (req, res) {
  var acceptEncodeing = req.headers['accept-encoding'];
  var gzip;

  if (acceptEncodeing.indexOf('gzip') !== -1) {
    // 判断是否需要gzip压缩
    gzip = zlib.createGzip();
    // 响应 Content-Encoding，告诉浏览器：文件被gzip压缩过
    res.writeHead(200, {
      'Content-Encoding': 'gzip'
    });
    fs.createReadStream(filePath).pipe(gzip).pipe(res);
  } else {
    fs.createReadStream(filePath).pipe(res);
  }
})

server.listen('3000');