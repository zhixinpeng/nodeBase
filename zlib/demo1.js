// 文件压缩
var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var inFile = fs.createReadStream('../extra/fileForCompress.png');
var out = fs.createWriteStream('../extra/fileForCompress.gz');

inFile.pipe(gzip).pipe(out);