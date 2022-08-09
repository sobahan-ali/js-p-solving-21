

// console.log(first, second)

// first = second;

// second = first
// console.log(first, second)

// approach 1
// let temp = first;

// first = second;

// second = temp;

// approach 2 ------destructuring
let first = 5;
let second = 7;

[first, second] = [second, first];


console.log(first, second);

