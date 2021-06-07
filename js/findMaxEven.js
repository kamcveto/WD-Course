// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---
function findMaxEven(numbers){
    let max=numbers[0];
    let len = numbers.length;
    for(let i = 0; i < len; i++){
        
        if(numbers[i] > max && (numbers[i] % 2 === 0) )
        {
            max = numbers[i];
        }
    }
    return max
}

// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);