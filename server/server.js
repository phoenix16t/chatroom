var http = require("http");
var url = require('url');

var ip = "127.0.0.1";
var port = 3001;

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/json"
};

var router = function(request, response) {

  var path = url.parse(request.url).pathname;
  var method = request.method;

  console.log(method, "--", path);                   // logging

  response.writeHead(404, headers);
  response.end('server works');
}

var server = http.createServer(router);
server.listen(port, ip);

console.log("Listening");
