// 同个事件，多个事件监听器
var EventEmitter = require('events');

class Man extends EventEmitter {};

var man = new Man();

man.on('wakeup', function () {
  console.log('man has woken up');
});

man.on('wakeup', function () {
  console.log('man has woken up again');
});

man.emit('wakeup');