// 监听文件修改
var fs = require('fs');

var options = {
  persistent: true,
  interval: 2000
};

// curr, prev是被监听文件的状态，fs.Stat实例
// 可以通过fs.unwatch()移除监听
fs.watchFile('../extra/fileForWatch.txt', options, function (curr, prev) {
  console.log(curr);
  console.log(prev);
  console.log('修改时间为：' + curr.mtime);
});