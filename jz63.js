/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	if(!prices || prices.length == 0) {
		return 0;
	}
	let profit = [];
	let cost = prices[0];
	profit[0] = 0;
	for (let i = 1; i < prices.length; i++) {
		cost = Math.min(cost,prices[i]);
		profit[i] = Math.max(profit[i-1],prices[i]-cost);
		// console.log('cost: '+cost);
		// console.log('profit: '+profit[i]);
	}
	return profit.pop();
};

console.log(maxProfit([7,6,4,3,1]));