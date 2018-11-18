var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');
var express = require('express');

var publicPath = path.resolve(__dirname, 'public'); //path.join(__dirname, 'public');

app.use(express.static(publicPath));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/ChatBotSM.html');
});

app.post('/', function(req, res){
  res.sendFile(__dirname + '/ChatBotSM.html');
});


io.on('connection', function(socket){
  console.log('Usuario conectado');
  socket.on('disconnect', function(){
    console.log('Usuario desconectado');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('Mensaje: ' + msg);
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});