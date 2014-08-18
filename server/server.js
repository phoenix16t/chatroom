var http = require("http");
var url = require('url');
var getMessages = require('./queries').getMessages;

var ip = "127.0.0.1";
var port = 3001;

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/json"
};

var sendResponse = function(response, status, text) {
  //console.log("sendResponse:", text);           // logging
  responseText = JSON.stringify(text);
  response.writeHead(200, headers);
  response.end(responseText);

};

var router = function(request, response) {

  var path = url.parse(request.url).pathname;
  var method = request.method;
  console.log(method, typeof(method));
  var status = 200;
  var responseText = 'server works';

  console.log(method, "--", path);               // logging

  if (path === '/messages') {
    if (method === 'GET') {
      console.log("get works");                 // logging
      getMessages(function(err, messages) {
        console.log("getMessages");
        sendResponse(response, status, messages);
      });
    } else if (method === 'OPTIONS'){
      sendResponse(response, status, responseText);
    }
  }
  else {
    status = 404;
    responseText = "Bad page";
    sendResponse(response, status, responseText);
  }
}

var server = http.createServer(router);
server.listen(port, ip);

console.log("Listening");                         // logging
