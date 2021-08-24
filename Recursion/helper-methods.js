//Recursion that uses a single call to invoke an internal recursive function

function collectOddVals(arr){
	//declared outside main function to preserve state
	let results = []
	
	//Base case to break from recursion
	function helper(helperInput){
		if(helperInput.length === 0){
			return;
		}

	//if odd push it into results
	if(helperInput[0] % 2 !=0){
		result.push(helperInput[0]);
	}
	
	//modify input, reduce size of the arr
	// helperInput[0] is always a new num
	helper(helperInput.slice(1));
}
	// call recursive function with initial passed `arr`
	helper(arr);
	return result;
}