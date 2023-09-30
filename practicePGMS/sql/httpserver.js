const http = require('http'); // 1 - Import Node.js core module

 http.createServer(function (req, response) {   // 2 - creating server

    //handle incomming requests here..
    response.writeHead(300,{ 'Content-type':'text/plain'});
    //send the response body as 'hello world'
    response.end('hello world in node js')


}).listen(8082); //3 - listen for any incoming requests
     

console.log('Node.js web server at port http://127.0.0.1:8082/');