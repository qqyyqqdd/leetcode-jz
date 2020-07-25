/**
 * @param {number[]} nums
 * @return {number}
*/
 // 二分法 
var missingNumber = function(nums) {
	if(!nums || nums.length == 0) {
		return 0;
	}
	let beg = 0, end = nums.length-1;
	while(beg <= end) {
		let mid = parseInt((beg+end)/2);
		console.log(mid)
		if(nums[mid] == mid) {
			beg = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return beg;
};

// 顺序查找
missingNumber = function(nums) {
	if(!nums || nums.length == 0) {
		return 0;
	}
	for(let i = 0; i < nums.length; i++) {
		if(nums[i] != i) {
			return i;
		}
	}
	return nums.length;
}
console.log(missingNumber([0,1,2,3,4,5,6,7,8,10]));