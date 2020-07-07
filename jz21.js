/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
	if (nums.length == 0) {
		return nums;
	}
	let low = 0;
	let high = nums.length-1;
	let tmp = nums[high];
	while(low<high) {
		for(;nums[low]%2 == 1 && low < high; low++);
		nums[high] = nums[low];
		for(;nums[high]%2 == 0 && low < high; high--);
		nums[low] = nums[high];
	}
	nums[high] = tmp;
	return nums;
};

console.log(exchange([21,23,34,12,-98,1002,45,78,93,38]));