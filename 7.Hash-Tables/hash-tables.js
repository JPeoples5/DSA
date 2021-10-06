class HashTable {
	constructor(size = 53) {
		this.hashArr = new Array(size);
	}

	_hash(str, prime = 31) {
		let total = 0;
		let charKeyCode;
		// only loop through the first 100 chars of the str
		for (let i = 0; i < Math.min(str.length, 100); i++) {
			charKeyCode = str[i].charCodeAt(0);
			total = total * prime + charKeyCode;
		}
		let hashPosition = total % this.hashArr.length;
		return hashPosition;
	}
}

let HT = new HashTable();
