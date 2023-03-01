const express =require ('express');
// const http = require ('http');
const socket =require ('socket.io');
// App setup
const app = express();
// Static files
app.use(express.static('public'));

// const server =http.createServer(app);
// Socket setup
const port = process.env.PORT || 8080;

const server = app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}.`)
});

const io =socket(server);

io.on('connection',(socket)=>{
console.log('socket connection',socket.id)

socket.on('chat',(data)=>{
    io.sockets.emit('chat',data);
});

socket.on('typing',(data)=>{
socket.broadcast.emit('typing',data)
});

});


