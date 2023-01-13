console.log('message');

function pickRandomMessage(messageArray) {
    const randomIndex = Math.floor(Math.random() * messageArray.length);
    return messageArray[randomIndex];
}

function formMessage(messageArray){
    const messageArrayCopy = [...messageArray];

    const capitalizedFirstCharacterOfFirstMessage = messageArrayCopy[0][0].toUpperCase();
    const remainingMessage = messageArrayCopy[0].slice(1);
    messageArrayCopy[0] = capitalizedFirstCharacterOfFirstMessage + remainingMessage;

    const message = messageArrayCopy.join(' ') + '.';
    return message;
}

module.exports = {
    pickRandomMessage: pickRandomMessage,
    formMessage: formMessage,
}
