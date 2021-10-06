//https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11071950#questions

//goal: check n with n+1 and move the largest number to the right
//many sorting algos involce some type of swapping

function swap(arr, indx1, indx2) {
	let temp = arr[indx1];
	arr[indx1] = arr[indx2];
	arr[indx2] = temp;
}

function bubbleSort(arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			console.log(arr, arr[j], arr[j + 1]);
			//swap
			if (arr[j] > arr[j + 1]) {
				console.log("swap");
				// [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		console.log("break");
	}
	return arr;
}

bubbleSort(arr);

// new approach

function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		// the last item will always be sorted so no need to loop thru it
		for (let j = 0; j < array.length - 1 - i; j++) {
			if (array[j] > array[j + 1]) [array[j], array[j + 1]] = [array[j + 1], array[j]];
		}
	}
	return array;
}

// save amount of iterations for a nearly sorted arr
function bubbleSort(array) {
	var noSwaps;
	for (let i = 0; i < array.length; i++) {
		// the last item will always be sorted so no need to         loop thru it
		for (let j = 0; j < array.length - 1 - i; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				console.log("loops");
				noSwaps = false;
			}
		}
		if (noSwaps) {
			break;
		}
	}
	return array;
}
