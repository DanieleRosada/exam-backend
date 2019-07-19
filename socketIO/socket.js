const socket = require('../config/socket');
var io = require('socket.io').listen(socket.port);
const rabbit = require('../structure/rabbit');

io.on('connection', (socket) => {
  console.log("connesso");
 });

rabbit.reciveToQueue('sendQueue', (newData) => {
  console.log(newData);
  io.sockets.emit('data', newData);
});