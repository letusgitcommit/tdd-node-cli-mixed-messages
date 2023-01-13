console.log('message');

function pickRandomMessage(messageArray) {
    const randomIndex = Math.floor(Math.random() * messageArray.length);
    return messageArray[randomIndex];
}

function formMessage(messageArray){

}

module.exports = {
    pickRandomMessage: pickRandomMessage,
    formMessage: formMessage,
}
