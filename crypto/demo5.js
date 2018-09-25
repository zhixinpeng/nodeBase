// 加密解密
// 加密：crypto.createCipher(algorithm,password)、crypto.createCipheriv(algorithm,key,iv)
// 解密：crypto.createDecipher(algorithm,password)、crypto.createDecipheriv(algorithm,key,iv)

// crypto.createCipher(algorithm,password)
var crypto = require('crypto');
var secret = 'secret';

var cipher = crypto.createCipher('aes192', secret);
var content = 'hello';
var cryptedContent;

cipher.update(content);
cryptedContent = cipher.final('hex');
console.log(cryptedContent);