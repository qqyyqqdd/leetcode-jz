/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
	while(b != 0) {
		let c = (a & b) << 1; //c为进位
		a ^= b; //非进位和
		b = c; // b为进位
	}
	return a;
};