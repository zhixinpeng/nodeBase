// process.stdin：进程的标准输入
// process.stdout：进程的标准输出
// process.stderr：进程的错误输出
process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if(chunk !== null){
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', () =>{
  process.stdout.write('end');
})