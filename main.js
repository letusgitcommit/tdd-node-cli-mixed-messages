function pickRandomPhrase(phrases) {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

function formMessage(messageArray){
    const messageArrayCopy = [...messageArray];

    const capitalizedFirstCharacterOfFirstMessage = messageArrayCopy[0][0].toUpperCase();
    const remainingMessage = messageArrayCopy[0].slice(1);
    messageArrayCopy[0] = capitalizedFirstCharacterOfFirstMessage + remainingMessage;

    const message = messageArrayCopy.join(' ') + '.';
    return message;
}

function main() {

    const subjectPhrases = [
        'the sun',
        'the moon',
        'a star',
        'someone',
        'that computer',
        'the lamp',
    ]

    const verbPhrases = [
        'is',
        'is not',
        'totally did',
        'moved away from',
        'leaped over',
        'bounded through',
    ]

    const adjectivePhrases = [
        'so pink',
        'so blue',
        'very noticeable',
        'invisible',
        'tasty',
    ]

    const phrases = [
        pickRandomPhrase(subjectPhrases),
        pickRandomPhrase(verbPhrases),
        pickRandomPhrase(adjectivePhrases)
    ]

    const message = formMessage(phrases);

    console.log(message);
}

module.exports = {
    pickRandomPhrase: pickRandomPhrase,
    formMessage: formMessage,
}

main();
