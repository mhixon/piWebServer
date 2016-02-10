var express = require('express');
var app = express();
var io = require('socket.io').listen(app);
var pong = require('./pong.js');

var usernames =[];

app.listen(3333, function() {
	console.log("Server started on port 3333");
});

io.on('connection', function(socket) {
	console.log("A new user has connected.");
	io.on('setName', function(data) {
		console.log(data + "is ready to play.");
		usernames.push(data);
	});
	io.on('initGame', function() {
		console.log("Initalizing game ...");
		pong.initGame();
	});
	io.on('updateGame', function() {
		console.log("Updating game ...");
		pong.updateGame();
	});
	
});