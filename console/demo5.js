// 深层打印
// 当obj的层级比较深得时候，可以通过console.dir(dir[,options])打印深层对象
var obj = {
  human: {
    man: {
      info: {
        nick: 'chyingp'
      }
    }
  }
};

console.log(obj);
console.dir(obj);

console.dir(obj, {
  depth: 3
});