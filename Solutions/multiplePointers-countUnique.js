/* ##
Two pointers.
Increasing ordered arr.
Mutate arr.
Position of trailing i (+ 1) == how many uniques
Right pointer is going ahead

Step 1:
 i
[1,2,3,3,3,4,4]
   j

Step 2:
   i
[1,2,3,3,3,4,4]
           j


Step 3: 
       i
[1,2,3,{3->4},3,4,4]
                j

Step 2:
       i
[1,2,3,4,3,4,4]
             j

return (i + 1) == 4
*/
function countUniqueValues(arr){
  if(arr.length === 0) return 0
  let i = 0
  for(let j = 1; j < arr.length; j++){
      if(arr[i] !== arr[j]){
          i++
          arr[i] = arr[j]
      }
  }
  return (i + 1)
}

countUniqueValues([12,3,42,4,32,3,4,2,])

// This only works if I can mutate the arr
