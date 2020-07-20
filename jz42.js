/**
 * @param {number[]} nums
 * @return {number}
 */

 // 动态规划
var maxSubArray = function(nums) {
	if(nums.length <= 0) {
		return 0;
	}
	let dp = new Array(nums.length);
	dp[0] = nums[0];
	for(let i = 1; i < nums.length; i++){
		dp[i] = Math.max(nums[i],dp[i-1]+nums[i]);
	}
	console.log(dp);
	return Math.max(...dp);
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

