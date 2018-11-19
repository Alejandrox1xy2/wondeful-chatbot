$(document).ready(function () {
    $(document.getElementById('')).click(function () {
        $(this).hide(1000);
        $(document.getElementById('myForm')).show(800);

    });
    $(document.getElementById('cancelar')).click(function () {
        $(document.getElementById('myForm')).hide(800);
        $(document.getElementById('start')).show(1000);
//jquery que utilice para unos botones pero al final lo he usado de otra forma
    });

    

    const socket = io();

    $('form').submit(function () {
        const message = $('#m').val();
        socket.emit('user-message', message);
        $('#m').val('');
        $('#messages').append(`<div class="user-message">${message}<div/>`)
        const container = document.getElementById('messages');
        container.scrollTo(0, container.scrollHeight);
        return false;
    });

    socket.on('bot-response', function (message) {
        $('#messages').append(`<div class="bot-message">${message}<div/>`)
        const container = document.getElementById('messages');
        container.scrollTo(0, container.scrollHeight);
    })
});



