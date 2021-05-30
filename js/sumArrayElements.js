// Example - sum all numbers in the interval [1..10]:
var sum = 0;
for ( var x = 1; x <= 10 ; x++ ){
  sum += x ;
};
console.log("sum = " + sum);

// TASK: given the array numbers, write the code which will print in console the sum of all positive  even numbers in the array:
let numbers = [-2, 3, 7, 8, -1, 4, 2];
// >>>>>>>>> write your code bellow:
var sum = 0;
var l=numbers.length;
for(var i =0; i<l;i++){
    if ( i % 2 === 0){
        sum += i;
    }
}
console.log("sum = " + sum)

// expected output: 14