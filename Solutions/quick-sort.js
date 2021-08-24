// Quick sort.
// - Based on arrays on 0 || 1 element are already sorted
// - Select one element (pivot), find the index where the pivot should end up in a sorted arr
// -  once the pivot is properly positioned, quick sort can be applied to either side of the pivot

// revisit this - You will understand the next time through
// notoptimized the srart points are set to 0 for simplicity

// Avg time complexity: O(nlog n)
// worst time: O(n^2) - if pivotPt remaians the first element
// space complexity: O(logn)

quickSort([24,6,5,32,54,-88,6,8,0,]);

function pivot(arr, start = 0, end = arr.length -1){
  function swap(arr, index1, index2){
      [arr[index1], arr[index2]]=[arr[index2], arr[index1]];
  }
  
  let pivotPt = arr[start];
  let swapIndex = start;
  
  for(let i = start+1; i<= end; i++){
      if(pivotPt > arr[i]){
        swapIndex++;
        swap(arr, swapIndex,i)
      }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length -1){
  if(left < right){
    let pivotIndex = pivot(arr,left,right)
    //left
    quickSort(arr,left,pivotIndex -1);
    //right
    quickSort(arr, pivotIndex +1, right);
  }
  return arr;
}




