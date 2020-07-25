/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 // 顺序查找
var search = function(nums, target) {
	if(!nums || nums.length == 0) {
		return 0;
	}
	let count = 0;
	for(let i in nums) {
		if(nums[i] == target) {
			count ++;
		}
		if(nums[i] > target) {
			break;
		}
	}
	return count;
};


// 二分查找 
search = function(nums,target) {
	if(!nums || nums.length == 0 ) {
		return 0;
	}
	let count = 0;
	let beg = 0,end = nums.length-1;
	let mid = parseInt((end+beg)/2);
	while(beg<=end) {
		// console.log(mid);
		if(nums[mid] < target) {
			// console.log("in right");
			beg = mid+1;
			mid = parseInt((end+beg)/2)
		} else if (nums[mid] > target) {
			// console.log("in left");
			end = mid-1;
			mid = parseInt((beg+end)/2);
		} else {
			// console.log("find");
			count++;
			for(let i = mid+1; i <= end && nums[i] == target; i++,count++);
			for(let i = mid-1; i >= beg && nums[i] == target; i--,count++);
			break;
		}
	}
	return count;
}
console.log(search([5,7,7,8,8,10],8));