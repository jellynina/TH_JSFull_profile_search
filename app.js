var router = require("./router.js");

/*
	create web server
*/

var http = require('http');
http.createServer(function (request, response) {
	router.home(request, response);
	router.user(request, response);

}).listen(3000, "127.0.0.1"); // loacal machine , but if on the server?
//}).listen(3000); // on server 可以直接 ex: 使用treehouse workspace. 架上去怎麼辦？
console.log('Server running at http://127.0.0.1:3000/');
// console.log('Server running at <the url>');

