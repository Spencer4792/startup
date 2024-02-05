const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('joinEvent', (eventId) => {
        socket.join(eventId);
        console.log(`A user joined event: ${eventId}`);
    });

    socket.on('sendMessage', (data) => {
        io.to(data.eventId).emit('receiveMessage', data.message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Listening on port ${port}`));
