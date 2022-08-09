const songs = ['Amar sonar bangla ami tomay valobasi', 
'Chirodin tomar akash', 
'Tomar batash amar prane bajay basi sonar bangla.'];
// console.log(songs);

const newSong = songs.join(' hello ');

// console.log(newSong);

// math pow 
let num = 2;

// console.log(Math.pow(num, 5));

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// math.abs 

let mark1 = 20;
let mark2 = 50;

let difference = mark1-mark2;
let absValue = Math.abs(difference);
// console.log(absValue);

if (absValue < 5){
    // console.log('you r friends')

} else{
    // console.log('you r not friends')
}

// Math.round practice 
let num3 = 1.51;
console.log(Math.round(num3)); // output 2

let num4 = 1.0001;

console.log(Math.ceil(num4)) // output 2

let num5 = 1.9999;

console.log(Math.floor(num5)) // output 1

