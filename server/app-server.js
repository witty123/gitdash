var express = require("express");
var app = express();
var config = require("./config");
var path = require("path");

app.use('/public', express.static(__dirname + '/../app/public'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve((__dirname + '/../app' + '/index.html')));
});

app.listen(3000, function() {
	console.log("Listening on 3000 port.")
});