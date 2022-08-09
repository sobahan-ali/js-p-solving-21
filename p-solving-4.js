// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

function reactAngleArea (long, height) {
    // console.log(long, height)
    const area = long * height;
    return area;
}
let long = 50;
let height = 40;

let input = reactAngleArea (long, height);
console.log(input);