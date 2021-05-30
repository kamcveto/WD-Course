//TASK: да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени дължина и ширина:

// ---> YOUR CODE HERE <---
function calcRectangleArea(rectWidth, rectHeight){
    return rectWidth * rectHeight; 
}
// TEST:
let rectWidth = 6;
let rectHeight = 3;

let area = calcRectangleArea(rectWidth, rectHeight);

console.log(`The area of rectangle is: ${area}`);

// expected result: 18
// The area of rectangle is: 18