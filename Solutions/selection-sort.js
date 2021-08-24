
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344154#questions


// Selection sort is worse than bubble sort.

//Incorrect version as I create a new array
function selectionSort(array) {
  // Only change code below this line

  let smallArr = []
  for(let i = array.length - 1 ; i >= 0; i--){
    let smallest = Math.min(...array);
    smallArr.push(smallest);
    array.splice(smallest,1)
  }
  return smallArr;
}


///////


let arr = [3333,1,33,553234,0]

const selectionSort = (arr) =>{
  //set firt elemnt as min
  for(let i = 0; i < arr.length; i++){
    let minNumIndx = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[minNumIndx]){        
        [arr[j] , arr[minNumIndx]] = [arr[minNumIndx],arr[j]];

      } 
    }
  }
  
  return arr;
}

selectionSort(arr);