// crypto.createCipher()需要提供key和iv，可以是Buffer，也可以是utf8编码的字符串，还需要关注他们的长度
// key：根据选择的算法有关，比如aes128、aes192、aes256，长度分别是128、192、256（16、24、32字节）
// iv：都是128位（16字节）
var crypto = require('crypto');
var key = crypto.randomBytes(192 / 8);
var iv = crypto.randomBytes(128 / 8);
var algorithm = 'aes192';

function encrypt(text) {
  var cipher = crypto.createCipheriv(algorithm, key, iv);
  cipher.update(text);
  return cipher.final('hex');
}

function decrypt(encrypted) {
  var decipher = crypto.createDecipheriv(algorithm, key, iv);
  decipher.update(encrypted, 'hex');
  return decipher.final('utf8');
}

var content = 'hello';
var crypted = encrypt(content);
console.log(crypted);

var decrypted = decrypt(crypted);
console.log(decrypted);