console.log('message');

function randomMessagePicker(message_array) {
    const random_index = Math.floor(Math.random() * message_array.length);
    return message_array[random_index];
}

module.exports = {
    randomMessagePicker: randomMessagePicker,
}
