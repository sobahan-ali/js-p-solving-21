function lowestNo (numbers) {
    let lowest = numbers[0]; 
    for (let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if (lowest > element){
            lowest = element;
        }
    }
    return lowest
}

const array = [120, 130, 10, 20, 80];
const smallestNo = lowestNo(array);
console.log(smallestNo)