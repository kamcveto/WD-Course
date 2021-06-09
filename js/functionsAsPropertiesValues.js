// TASK: define object 'calc', with next properties and values:
// 'add' - a function, which returns the sum of 2 numbers
// 'sub' - a function, which returns the subtraction of 2 numbers
// 'mult' - a function, which returns the multiplication of 2 numbers
// 'div' - a function, which returns the division of 2 numbers

// ---> YOUR CODE HERE <---
var calc ={
    add: function(x,y){
        return x+y;
    },
    sub: function(x,y){
        return x-y;
    },
    mult: function(x,y){
        return x*y;
    },
    div: function(x,y){
        return x/y;
    }
}

// TEST:
let x = 6, y = 3;
console.log(calc.add(x, y)); // 9
console.log(calc.sub(x, y)); // 3
console.log(calc.mult(x, y)); // 18
console.log(calc.div(x, y)); // 2
