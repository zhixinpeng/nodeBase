// 解析IPv4地址的主机名
var dns = require('dns');

dns.resolve4('id.qq.com', function (err, address) {
  if (err) throw err;
  console.log(JSON.stringify(address));
})