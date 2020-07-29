/**
 * @param {number} n
 * @return {number}
 */

 // 递归
var sumNums = function(n) {
	n && (n += sumNums(n-1));
	return n;
};

console.log(sumNums(9))