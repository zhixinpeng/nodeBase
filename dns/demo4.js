// 解析cname
var dns = require('dns');

dns.resolveCname('www.pengzhixin.com', function (err, addresses) {
  if (err) throw err;
  console.log(JSON.stringify(addresses));
})