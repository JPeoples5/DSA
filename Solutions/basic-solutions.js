//POWER SOLUTION

function power(base, exponent){
    if(exponent === 0) return 1
    return base * power(base,exponent-1)
}

///

function power(base, exp){
	let result = 1
	for(let i = 1; i <= exp; i++){
		result *= base
	}
	return result
}

//////////////////////////////////////


//FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}



function factorial(num){
	let result = 1
	for(let i = 1; i <= num; i++){
		result *= i
	}
	return result
}

//////////////////////////////////////

//PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

const productOfArray = (arr) => {
    let productSum = 1;
  
    arr.map(i => productSum *= i);
    
    return productSum;
}

//////////////////////////////////////

RECURSIVE RANGE SOLUTION
function recursiveRange(num){
   if (x === 0 ){
	 return 0
	}
   return num + recursiveRange(num - 1)
}

//////////////////////////////////////

FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
