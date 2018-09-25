// 客户端
var http = require('http');
// 客户端获取httpVersion/statusCode/statusMessage
http.get('http://127.0.0.1:3000/angus', function (res) {
  console.log('1、http版本：' + res.httpVersion);
  console.log('2、返回状态码：' + res.statusCode);
  console.log('3、返回状态描述信息：' + res.statusMessage);
  console.log('4、返回正文：');

  res.pipe(process.stdout);
});