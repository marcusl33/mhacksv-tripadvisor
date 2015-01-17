var express = require('express');
var app = express();
// var url = require('url');



var bodyparser = require('body-parser');


app.get('/', function(req, res) {
	sess = req.session;
	res.sendFile(__dirname + '/main.html');
});

app.get('/details', function(req, res) {
	// var location = req.query.location;
	// var duration = req.query.duration;
	res.sendFile(__dirname + '/details.html');
});

app.listen(3000, function(){
	console.log('listening on port 3000');
});