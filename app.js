/*
  1. create web server
*/

var http = require('http');

var i = 5;


http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // response.write('this is before end.\n');
  setInterval(function(){
      response.write(i + "\n");
      if(i === 0) {
        response.end("Blast off\n");
      }
      i--;
    }, 1000);
  // response.end('Hello World\n');
  // response.write('this is after end.\n');
}).listen(3000, "127.0.0.1"); // loacal machine , but if on the server?
//}).listen(3000); // on server 可以直接 ex: 使用treehouse workspace.

console.log('Server running at http://127.0.0.1:3000/');