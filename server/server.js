const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
const app = express();
app.use(express.static(publicPath));

const sever = http.createServer(app);
const io = socketIO(sever);

io.on('connection', socket => {
    console.log('new user got connected');

    socket.on('disconnect', () => {
        console.log('user was disconnected');
    });

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', message => {
        console.log(message);
        socket.broadcast.emit('newMessage', {...message, created_at: new Date().getTime()});
    });

    socket.emit('newMessage', {
        from: "Mosich79@gmail.com",
        text: "Khobie?",
        created_at: new Date().getTime()
    });
});

sever.listen(PORT, () => {
    console.log(`node express instance running on port: ${PORT}...`);
});