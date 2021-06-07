// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---
function SumEven2DimArrayElements(arr){
  var sum = 0;
  for ( i = 0; i < arr.length; i++) {
  var innerArrayLength = arr[i].length;
  for ( j = 0; j < innerArrayLength; j++) {
    if (arr[j] % 2 == 0)
    sum =+j; 
    }
  }
  return sum;
}
    
// TEST:
var arr = [
    [1,2,3],
    [4,5,6]
  ];
  
  let sum = SumEven2DimArrayElements(arr);
  console.log(sum);