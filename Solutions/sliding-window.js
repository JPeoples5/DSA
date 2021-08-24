/*Sliding window 
  The window increases or closes conditionally ( and a new window is created)
  Useful for keeping track of a subset of data in an array/string
*/

  function maxSubArr(arr,num){
   let tempSum = 0;
   let maxSum = 0;
   for(let i = 0; i < arr.length; i++){
     maxSum += arr[i];
   }
   tempSum = maxSum;
   for(let j = num; j < arr.length; j++){
     let trailingNum = arr[j - num];
     let addedNum = arr[j];
     tempSum = tempSum - trailingNum + addedNum;
   }
 }
          //  [ wndw]  
var arry = [1,4,6,9,7,4]
var num = 3

maxSubArr(arry,num)

//Note: did not undertsand the trailingNum wholly
