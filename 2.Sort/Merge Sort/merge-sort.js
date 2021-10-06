/*Merge sort takes the divide and conquer approach
Divides into one or 0 element.length array 

[5,20,10,0]
[5,20] [10,0]
[5] [20] [10] [0] //Now Merge
[5,20] [0,10] // merge again

[0,5,10,20]


  N == 1st arr M == 2nd arr
 O(n + m)
 1. Do just the merge of two unsorted arrs.

*/

//arr1 and arr2 are already sorted
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

merge([22, 43, 22324, 999999], [0, 7, 88]);
