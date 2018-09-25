// 关于options.stdio
// 默认值为['pipe','pipe','pipe']
// 这意味着child.stdin、child.stdout不是undefined;可以通过监听data事件，来获取数据
var spawn = require('child_process').spawn;
var ls = spawn('ls', ['-al']);

ls.stdout.on('data', function (data) {
  console.log('data from child: ' + data);
});

ls.on('close', function (code) {
  console.log('child exists with code: ' + code);
});