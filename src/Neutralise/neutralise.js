function interact(str1, str2) {
	let result = '';

	for (let i = 0; i < str1.length; i++) {
			if (str1[i] === str2[i]) {
					result += str1[i];
			} else {
					result += '0';
			}
	}

	return result;
}

module.exports = interact;