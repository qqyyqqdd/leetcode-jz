/**
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function(n) {
	let dp = new Array(6*n).fill(0);
	for(let i = 1; i <= 6; i++) {
		dp[i] = 1;
	}
	// console.log(dp);
	for(let i = 2; i <= n; i++) {
		console.log("第"+i+'个骰子');
		for(let k = 6*n; k >= i; k--) { // 第i个骰子
			dp[k] = 0;
			for(let j = 1; k-j >= i-1 && j <= 6; j++) {
				dp[k] += dp[k-j]
			}
			console.log(dp);
		}
	}
	let total = Math.pow(6,n);
	let res = [];
	for (let i = 0,j = n; j < dp.length; i++,j++) {
		res[i] = parseFloat((dp[j]/total).toFixed(5));
	}
	return res;
};

console.log(twoSum(3));