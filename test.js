const zlib = require("zlib");
var fs = require("fs");
var short = fs.createReadStream(__dirname + "/file.txt");
var shortW = fs.createWriteStream(__dirname + "/news1.txt");
const compres = zlib.createGzip();
short.on("data", function (chunk) {
  console.log("TEXT: \n" + chunk);
  shortW.write(chunk);
});
shortW.pimp(compres);
