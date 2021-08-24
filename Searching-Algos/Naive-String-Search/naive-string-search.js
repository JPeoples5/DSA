// Naive approach.

			 //“hi hohohoh hi”,  “hi”
function stringSearch(longStr, shortStr){
	let matches = 0;

	for(let i = 0; i < longStr.length; i++ ){

		for(let j = 0; j < shortStr.length; j++ ){
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