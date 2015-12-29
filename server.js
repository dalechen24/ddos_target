var DDOS = require("ddos");

var params = {};
params.maxcount = 30;
params.burst = 25;
params.limit = params.burst * 4;
params.maxexpiry = 120;
params.checkinterval = 1;
params.errormessage = "Error";
params.testmode = false;
params.silent = false;
params.silentStart = false;
params.responseStatus = 429;

var ddos = new DDOS(params);

var express = require("express");
var http = require("http");
var ip = require("ip");
var server = express();

server.use(ddos.express);

server.set("port", process.env.PORT || 5000);
server.use(express.static(__dirname));

server.get("/", function(req, res) {
	res.type ("text/html");
	res.send("<h1>Hello World</h1>");
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
});

server.listen(server.get("port"), function() {
	console.log("Website started on " + ip.address() + ":" + server.get("port") + "; press Ctrl-C to terminate.");
});
