// 注册事件监听器前，事件先触发
var EventEmitter = require('events');

class Man extends EventEmitter {};

var man = new Man();

man.emit('wakeup', 1);

man.on('wakeup', function (index) {
  console.log('man has woken up ->' + index);
});

man.emit('wakeup', 2);