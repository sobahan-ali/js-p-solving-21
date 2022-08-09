// loop string
function streetStr (text) {
    for (let i = 0; i < text.length ; i++){
        let element = text[i];
        console.log(element)
    }
}

const str = 'i am a good boy';
const street = streetStr(str);

// reversed loop in string

function reversedString (text) {
    let reverse = '';
    for (let i = text.length-1; i >= 0; i--){
        const elements = text[i];
        reverse = reverse + elements;
        // console.log(elements, reverse)
    }
    return reverse;
}

const reversedSt = 'i love my country'
const reversed = reversedString(reversedSt)
// console.log(reversed)

// console.logMath.round(Math.random()*10)

// console.log(Math.floor(13.67))

console.log(Math.floor(12.96))