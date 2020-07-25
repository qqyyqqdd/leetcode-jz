/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // 双指针法
var twoSum = function(nums, target) {
	let small = 0, big = nums.length-1;
	let res = 0;
	while(small <= big) {
		res = nums[small]+nums[big];
		if(res < target) {
			small++;
		} else if(res > target) {
			big--
		} else {
			return [nums[small],nums[big]];
		}
	}
};

console.log(twoSum([10,26,30,31,47,60],40));