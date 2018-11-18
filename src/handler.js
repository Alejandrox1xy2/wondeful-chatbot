const UserController = require('./controllers/user.controller');

module.exports = socket => {
    socket.on('user-message', msg => {
        console.log('message-user',msg)
        UserController.start(msg, (error, { event, result }) => {
            if(error) return console.log(error);
            socket.emit(event, result);
        })
    }); 
}