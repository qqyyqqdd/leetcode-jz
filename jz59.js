/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 // 暴力法
var maxSlidingWindow = function(nums, k) {
	if(nums.length == 0 || k <= 0) {
		return [];
	}
    let res = [];
    for(let i = k; i <= nums.length; i++) {
    	res.push(Math.max(...nums.slice(i-k,i)));
    	console.log(res);
    }
    return res;
};

// 双端队列法
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));