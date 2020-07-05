/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
	let max = Math.pow(10,n)-1;
	let res = [];
	for (let i=1; i <= max; i++) {
		res[i-1] = i;
	}
	return res;
};

console.log(printNumbers(1));