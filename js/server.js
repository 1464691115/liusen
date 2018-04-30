var http = require("http");

var server = http.createServer(function (req, res) {
    console.log(server.url);
    res.end();
});


//监听   端口
server.listen(8080);