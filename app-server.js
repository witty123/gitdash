var express = require("express");
var app = express();

app.use('/public', express.static(__dirname + '/app/public'));
app.use('/bower_components',  express.static(__dirname + '/app/bower_components'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

app.listen(3000, function() {
	console.log("Listening on 3000 port.")
});