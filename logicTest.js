function arrayGroupAnagrams(str) {
	const result = {};
	for (word of str) {
		let sort = word.split("").sort().join("");
		if (result[sort]) {
			result[sort].push(word);
		} else {
			result[sort] = [word];
		}
	}
	return Object.values(result);
}

let array = ['cook','save','taste', 'aves', 'vase','state','map'];
let result = arrayGroupAnagrams(array)
console.log(result)