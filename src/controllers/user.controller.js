const bent = require('bent')
const getJSON = bent('json');

const valueWithTimeout = value => new Promise(resolve => {
    setTimeout(() => {
        resolve(value);
    }, 1000)
})

const sayGoodMorning = () =>  valueWithTimeout("Buenos días")

const defaultMessage = () => valueWithTimeout("I don't know")

const sayByChuck = async () => {
    const { value } = await getJSON('https://api.chucknorris.io/jokes/random')
    return value;
}

const actions = [
    {
        pattern: /Buenos días/gi,
        action: sayGoodMorning
    },
    {
        pattern: /Chuck Norris/gi,
        action: sayByChuck
    }
]

const dispatch = message => {
    for (const { pattern, action } of actions) {
        if(pattern.test(message)) return action(message);
    }
    return defaultMessage();
}

module.exports = {
    start(message, callback){
        dispatch(message).then(result => {
            callback(null, { event: 'bot-response', result })
        }).catch(callback);
    }
}