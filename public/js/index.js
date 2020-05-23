const socket = io();

socket.on('connect', () => {
    console.log("'connect' event happened!!!");
});

socket.emit('createMessage', {
    from: "Mosich@gmail.com",
    text: "Salam Chetorie??"
});

socket.on('newMessage', newMessage => console.log(newMessage));

socket.on('disconnect', () => {
    console.log("'disconnect' event happened!!!");
});