/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
	str = str.trim();
	console.log(str);
	let res = 0;
	let bndry = 214748364;
	console.log('boundry = '+bndry);
	let sign = 1;
	let beg = 1;
	if(str[0] == '-') {
		sign = -1;
	} else if(str[0] != '+') {
		beg = 0;
	}
	for(let i = beg; i < str.length; i++) {
		// console.log("cur res = "+res);
		if(str[i] < '0' || str[i] > '9') {
			console.log("Not a number");
			break;
		}
		if(res > bndry || res == bndry&&str[i] > '7'){
			console.log("out of boundry");
			return sign>0? 2147483647:-2147483648;
		}
		res = res*10+(str[i]-'0');
		console.log(res);
	}
	return sign*res;
};

console.log(strToInt('-91283472332'));