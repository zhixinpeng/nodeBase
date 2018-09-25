// 同一个域名可能对应多个不同的ip
var dns = require('dns');
var options = {
  all: true
};

dns.lookup('www.qq.com',options,function (err,address,family) {
  if(err) throw err;
  address.map(item => {
    console.log('地址：' + item.address);
  })
})