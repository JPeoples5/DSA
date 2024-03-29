// -This is not a comparison algo.
// - works on a list of numbers
// - exploits the fact that info about the size of a number is encoded in the number of digits
// - (more digits means a bigger number)

// [12, 349 ,54634, 242, 25]

// 1.look at the last digit of each num in the arr
// 	1a. place each of the numbers into a bucket based on their last digit [0-9]
// 	1a. remove them out of the buckets and place them into the arr
// 2. look at the scond to last digtit
// 	2a. place each of the numbers ..... based on theit secodn to last digit
// 	2a. remove them out of the buckets and place them into the arr

// Relearn this

function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}

function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);
	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k);
			digitBuckets[digit].push(nums[i]);
		}
		nums = [].concat(...digitBuckets);
	}
	return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
