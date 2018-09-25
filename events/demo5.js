// 异步执行，还是顺序执行
var EventEmitter = require('events');

class Man extends EventEmitter{};

var man = new Man();

man.on('wakeup', function () {
  console.log('man has woken up');
});

man.emit('wakeup');

console.log('woman has woken up');