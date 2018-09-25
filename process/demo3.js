// 获取命令行参数 process.argv
// 返回一个数组
// 元素1：node
// 元素2：可执行文件的绝对路径
// 元素x：其他，比如参数
process.argv.forEach(function (val, index, array) {
  console.log('参数' + index + ': ' + val);
})

// 运行 NODE_ENV=dev node argv.js --env production
// 输出不包括环境变量