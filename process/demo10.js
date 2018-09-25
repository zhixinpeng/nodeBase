// 警告信息
process.emitWarning('Something Happened!');

process.emitWarning('Something Happened!', 'CustomWarning');

// 可以对其进行监听
process.on('warning', warning => {
  console.warn(warning.name);
  console.warn(warning.message);
  console.warn(warning.stack);
});

// 也可以直接抛出Error对象
const myWarning = new Error('Warning! Something Happened!');
myWarning.name = 'CustomWarning';

process.emitWarning(myWarning);