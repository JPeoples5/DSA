// Binary search. O(log n)

// 1. Has to be sorted data.

function binarySearch(arr, tgt){
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    while(arr[middle] !== tgt && left <= right){
        if(tgt < arr[middle]){
            right = middle - 1;
        }else{
            left = middle + 1 ;
        }
            middle = Math.floor((left + right) / 2);
    }
    return arr[middle] === tgt ? middle : -1;	  
}

function stringSearch(longStr, shortStr){
	let matches = 0;
	for(let i = 0; i < longStr.length; i++ ){

	    for(let j = 0; j < shortStr.length; j++ ){
        console.log("j =",shortStr[j] , "i+j=", longStr[i + j]);
		    if(shortStr[j] !== longStr[i + j]) {
				break;
			}
			// j === last letter of the shortStrWrd
			if(j === shortStr.length - 1){
				matches ++;
			}
		}
	}
	return matches;
}