const sayGoodMorning = () => "Buenos días"

const dispatch = message => {
    switch(message){
        case "Buenos días": return sayGoodMorning();
        default: return "I don't know";
    }
}

module.exports = {
    start(message, callback){
        const result = dispatch(message);
        callback(null, { event: 'bot-response', result });
    }
}