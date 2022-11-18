var fs = require("fs");
var http = require("http");
var server = http.createServer(function (req, res) {
  console.log("URL " + req.url);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  var short = fs.createReadStream(__dirname + "/Site2");
  short.pipe(res);
});
server.listen(5500, "127.0.0.1");
console.log("connect: 5500");
