let arr1 =  [0,4,8,12];
let arr2 = [1,33,77,99];

function merge(arr1, arr2){
let results = [];
let i = 0;
let j = 0;
  
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      results.push(arr1[i])
      i++
    }else{
      results.push(arr2[j])
      j++
    }
  }
    
    while(i < arr1.length){
        results.push(arr1[i])
        i++
    }
    

    while(j < arr2.length){
      // why dont we need the if check 
        results.push(arr2[j]);
        j++
  } 
  return results;
}

merge(arr1,arr2)