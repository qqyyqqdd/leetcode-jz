/**
 * @param {number[]} nums
 * @return {number}
 */
function compareNum(num1,num2) {
	return num1-num2;
}
var majorityElement = function(nums) {
	nums.sort(compareNum);

	return nums[parseInt(nums.length/2)];
};