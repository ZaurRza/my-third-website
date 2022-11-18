const fs = require("fs");
var fs = require("fs");
var short = fs.createReadStream(__dirname + "/file.txt");
var shortW = fs.createWriteStream(__dirname + "/news2.txt");
short.on("data", function (chunk) {
  console.log("TEXT: \n" + chunk);
  shortW.write(chunk);
});
