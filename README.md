#	Build a Simple Dynamic Site with Node.js

Node.js is a versatile platform for building all sorts of applications. In this course, we're going to make a dynamic website that displays a Treehouse student's profile information by creating a server that will dynamically generate content, handle URLs, read from files and build a simple template engine.

# 疑惑

1. 要怎麼放上線呢？

## Creating a Simple Server in Node.js

創造連結[Treehouse](http://referrals.trhou.se/ninalee)學生資料庫的web app. Treehouse API url: `"http://teamtreehouse.com/" + username + ".json"`

### HTTP Servers

NODE doc [http](https://nodejs.org/api/http.html#http_http)

####Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
####Solution: Use Node.js to perform the profile look ups and server our template via HTTP

1. Create a web server

2. Handle HTTP route GET / and POST / i.e. Home
  if url == "/" && GET
    show search
  if url == "/" && POST
    redirect to /:username

3. Handle HTTP route GET /:username i.e. /chalkers
  if url == "/...."
    get json from Treehouse
      on "end"
        show profile
      on "error"
        show error

4. Function that handles the reading of files and merge in value
  read from file and get a string
    merge values in to string

## NODE API used

* [http.createServer](https://nodejs.org/api/http.html#http_http_createserver_requestlistener)
* response.writeHead
* response.write
* response.end
* setInterval

## HTTPS 說明筆記

```js
var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // response.write('this is before end.\n');
  setInterval(function(){
    response.write(new Date() + "\n");
  }, 1000);
  // response.end('Hello World\n');
  // response.write('this is after end.\n');
}).listen(3000, "127.0.0.1"); // loacal machine , but if on the server?
//}).listen(3000); // on server 可以直接 ex: 使用treehouse workspace.
```

```
node app.js
```

> 大約20秒之後瀏覽器才跑出東西，因為瀏覽器沒有讀到標準的`html`格式，所以他會等一下，想說可能晚點就會收到`<head>`, `<body>`等資訊。

## 關於Router

> When you type in a web address a request is sent to a server. After a domain name, there's a forward slash and then a path to a resource on the server. Sometimes, this is called a route. In this stage, we'll take a look at how to programmatically handle routes in Node.js.

