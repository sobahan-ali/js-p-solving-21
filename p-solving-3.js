// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 

function avarageNumber(array) {
    // console.log(array);
      let sum = 0;
      let totalNumber = array.length;
    for (let i = 0; i < array.length; i++){
        let elements = array[i];
        sum += elements;
       
    }
    const totalAvarage = sum / totalNumber;
    return totalAvarage;
    
}
const numbers = [2, 3, 4, 6, 5, 20];
const avarageTotal = avarageNumber(numbers);

console.log(avarageTotal);