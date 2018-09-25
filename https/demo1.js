// 客户端例子
var https = require('https');

https.get('https://www.baidu.com', function (res) {
  console.log('status code: ' + res.statusCode);
  console.log('headers: ' + JSON.stringify(res.headers));

  res.on('data', function (data) {
    process.stdout.write(data);
  });
}).on('error', function (err) {
  console.log(err);
});