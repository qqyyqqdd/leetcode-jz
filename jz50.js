/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
	if(s.length < 1) {
		return " ";
	}
	for(let i = 0; i < s.length; i++) {
		console.log(s[i]);
		console.log((s.slice(i+1)+s.slice(0,i)).indexOf(s[i]));
		if((s.slice(i+1)+s.slice(0,i)).indexOf(s[i]) == -1) {
			return s[i];
		}
	}
	return " ";
};

console.log("get: "+firstUniqChar("abaccdeff"));