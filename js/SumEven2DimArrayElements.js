// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---
function SumEven2DimArrayElements(arr) {
  var Summa =0
  for (i = 0; i < arr.length; i++)
    for(j = 0; j < arr[i].length; j++){
       if (j % 2 === 0)
         Summa =+ arr[i][j];
    }
  return Summa;
}
// TEST:
var arr = [
    [1,2,3],
    [4,5,6]
  ];
  
  let sum = SumEven2DimArrayElements(arr);
  console.log(sum);