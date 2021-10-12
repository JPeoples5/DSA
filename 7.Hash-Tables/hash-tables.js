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
		// mod'ing by the hashArr length forces the hashPosition to be a valid index
		let hashPosition = total % this.hashArr.length;
		return hashPosition;
	}

	set(key, value) {
		let index = this._hash(key);
		if (this.hashArr[index] === undefined) {
			this.hashArr[index] = [];
		}
		this.hashArr[index].push([key, value]);
	}

	get(key) {
		let index = this._hash(key);
		if (this.hashArr[index] === undefined) return undefined;

		if (this.hashArr[index].length === 1) {
			return this.hashArr[index][0][1];
		} else {
			for (let i = 0; i < this.hashArr[index].length; i++) {
				if (this.hashArr[index][i][0] === key) {
					return this.hashArr[index][i][1];
				}
			}
		}
	}
	// return an array of all keys in the table
	keys() {
		let keysArr = [];
		for (let i = 0; i < this.hashArr.length; i++) {
			if (this.hashArr[i]) {
				for (let j = 0; j < this.hashArr[i].length; j++) {
					if (!keysArr.includes(this.hashArr[i][j][0])) {
						keysArr.push(this.hashArr[i][j][0]);
					}
				}
			}
		}
		return keysArr;
	}

	// returns an array of values in the table
	values() {
		let valuesArr = [];
		for (let i = 0; i < this.hashArr.length; i++) {
			if (this.hashArr[i]) {
				for (let j = 0; j < this.hashArr[i].length; j++) {
					if (!valuesArr.includes(this.hashArr[i][j][1])) {
						valuesArr.push(this.hashArr[i][j][1]);
					}
				}
			}
		}
		return valuesArr;
	}
}

let ht = new HashTable(6);
ht.set("name", "Jeremiah");
ht.set("age", "25");
ht.set("favColor", "blue");
ht.set("isWorking", true);

console.log(ht.keys());
