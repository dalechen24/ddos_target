var express = require("express");
var http = require("http");
var url = require("url");
var ip = require("ip");
var server = express();

server.set("port", process.env.PORT || 5000);
server.use(express.static(__dirname));

server.get("/", function(req, res) {
	res.render("index");
});

server.use(function(req, res, next) {
	res.type("text/html");
	res.status(404);
	res.send("<h1>404 - Not Found</h1>");
});

server.use(function(err, req, res, next) {
	res.type("text/html");
	res.status(500);
	res.send("<h1>500 - Server Error</h1>");
	res.send(err);
});

server.listen(server.get("port"), function() {
	console.log("Website started on " + ip.address() + ":" + server.get("port") + "; press Ctrl-C to terminate.");
});
