// 文件解压
var fs = require('fs');
var zlib = require('zlib');

var gunzip = zlib.createGunzip();

var inFile = fs.createReadStream('../extra/fileForCompress.gz');
var outFile = fs.createWriteStream('../extra/fileForCompress.png');

inFile.pipe(gunzip).pipe(outFile);