// 单个事件监听器
var EventEmitter = require('events');

class Man extends EventEmitter {};

var man = new Man();

man.on('wakeup', function () {
  console.log('man has woken up');
});

man.emit('wakeup');