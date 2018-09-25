// 获取node specific参数：process.execArgv
// 返回node程序特有的参数，比如--harmony，这部分的参数不会出现在process.argv里
process.execArgv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

process.argv.forEach(function (val, index, array) {
  console.log(index + ": " + val);
})