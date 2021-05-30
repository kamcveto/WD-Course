// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---
function findMaxEven(numbers){
    let maxNum;
    for(let i = 0; i < numbers.length; i++){
        if(!maxNum){
            maxNum = numbers[i]
        }
        if(numbers[i] > maxNum){
            maxNum = numbers[i];
        }
    }
    return maxNum
}
// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);