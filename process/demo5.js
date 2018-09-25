// 当前工作路径：process.cwd() vs process.chdir(directory)
// process.cwd()：返回当前工作路径
// process.chdir(directory)：切换当前工作路径

console.log('Starting directory: ' + process.cwd());

try {
  process.chdir('../extra');
  console.log('New directory: ' + process.cwd());
} catch (err) {
  console.log('chdir：' + err);
}