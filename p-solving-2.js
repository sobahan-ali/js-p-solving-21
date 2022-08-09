//২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  

let num1 = 100 ;  num2 = 50; num3 = 90;

// console.log(num1, num2, num3)
if (num1 > num2 && num1 > num3 ){
    console.log( num1, 'is big number');
}
else if (num2 > num1 && num2 > num3){
    console.log(num2, 'is big number')
}
else {
    console.log(num3, 'is big number');
}