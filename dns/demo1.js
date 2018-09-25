// 查询域名对应的ip
var dns = require('dns');

dns.lookup('www.qq.com', function (err,address,family) {
  if(err) throw err;
  console.log('地址：' + address);
  console.log('family：' + family);
})