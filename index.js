var express = require('express');
var app = express();
var http = require('http').Server(app);

var io = require('socket.io')(http);

app.use(express.static('client-master'));
app.use('/workshop', express.static('client-class/workshop'));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('data', function(msg){
    socket.broadcast.emit('data', msg);
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});