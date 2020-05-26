/**
 * @var jQuery jQuery
 */

const socket = io();

socket.on('connect', () => {
    //
});

socket.on('newMessage', newMessage => {
    let li = jQuery('<li style="padding: 9px; border-radius: 15px; background-color:#e0e0e0; display: inline; "></li><br><br><br>');
    li.text(`${newMessage.from.toString()}: ${newMessage.text.toString()}`);
    jQuery('#messages').append(li);
    document.getElementById('message').innerText = "";
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {
        // TODO to be done!
    });
    document.getElementById('message').value = "";
});

socket.on('disconnect', () => {
    //
});