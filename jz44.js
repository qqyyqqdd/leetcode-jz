/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
	if(n < 10) {
		return n;
	}
	let digit = 1;
	let length = 10;
	for(;n > length; n -=length, length = 9*(digit+1)*Math.pow(10,digit), digit++);
	let num = Math.pow(10,digit-1) + parseInt(n/digit);
	let rest = digit - n%digit;
	let res = parseInt((num%Math.pow(10,rest))/Math.pow(10,rest-1));
	return res;
};
