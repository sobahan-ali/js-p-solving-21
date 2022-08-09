
// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

function lowestNumber(array) {
    // console.log(array);
        let smallNumber = array[0];
    for (let i = 0; i < array.length ; i++){
        let number = array[i];
        if (number < smallNumber){
            smallNumber = number;
        }

    }
    return smallNumber;
}

const numbers = [ 10, 20, 50, 90, 40, 20,5, 90, 800, -1];
const smallestNumber = lowestNumber(numbers);
console.log(smallestNumber);