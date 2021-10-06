// Time complexity: O(n loh n)
// Space: O(n)

function merge(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	let midpoint = Math.floor(arr.length / 2);
	let leftArr = mergeSort(arr.slice(0, midpoint), midpoint);
	let rightArr = mergeSort(arr.slice(midpoint));

	return merge(leftArr, rightArr);
}

mergeSort([24, 10, 55, -21, 66, 76, 23, 99999, 76, 0]); //[ -21, 0, 10, 23, 24, 55, 66, 76, 76, 99999 ]
