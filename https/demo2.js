// 访问安全证书不受信任的网站
var https = require('https');

https.get('https://kyfw.12306.cn/otn/regist/init', function (res) {
  res.on('data', function (data) {
    console.log(data)
    process.stdout.write(data);
  });
}).on('error', function (err) {
  console.log(err);
});