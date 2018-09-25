// 断言
console.assert(true, '1、right');

// console.assert(false, '2、right', '3、wrong');

try {
  console.assert(false, 'error occurred');
} catch (error) {
  console.log(error.message);
}