// 声明使用shell
var spawn = require('child_process').spawn;

var ls = spawn('bash', ['-c', 'echo "hello nodejs" | wc'], {
  stdio: 'inherit',
  shell: true
});

ls.on('close', function (code) {
  console.log('child exists with code: ' + code);
})