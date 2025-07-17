const http = require("http");

const server = http.createServer(function (req , res){

    if(req.url=== "/getSecretData"){
        res.end("there is secret data")
    }
    res.end("hello world");
});

server.listen(3000);
