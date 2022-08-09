function wordReverce (word) {
    // [ 'i', 'am', 'a', 'student', 'of', 'programming', 'hero', 'batch6' ]
    const wordReverseArray = [];
    const words = word.split(' ');
    for (let i = words.length-1 ; i >= 0; i--){
        let elements = words[i];
        wordReverseArray.push(elements);

    }
    // wordReverseArray.join(' ')
    return wordReverseArray;
}

const myText = 'i am a student of programming hero batch6'
const reverseWord = wordReverce(myText);

console.log(reverseWord);