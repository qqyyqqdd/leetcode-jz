/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
 // 约瑟夫环
 // 数学推导结论：f(n,m)=[f(n-1,m)+m]%n,n>1为长度，删除第m个数
 // n = 1时，f(1,m) = 0;
var lastRemaining = function(n, m) {
	let res = 0;
	for(let len = 1; len <= n; len++) {
		res = (res+m)%len;
	}
	return res;
};

console.log(lastRemaining(10,17));