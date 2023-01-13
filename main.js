console.log('message');

function pickRandomMessage(messageArray) {
    const random_index = Math.floor(Math.random() * messageArray.length);
    return messageArray[random_index];
}

module.exports = {
    pickRandomMessage: pickRandomMessage,
}
