/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
	nums.sort((a,b)=> a-b);
	let count = 0;
	for(let i = 0; i < 5 && nums[i] == 0; count++,i++);
	if(nums[4] - nums[count] >= 5) {
		return false;
	}
	for(let i = count; i < 4; i++) {
        if(nums[i] == nums[i+1]) {
            return false;
        }
    }
    return true;
};

console.log(isStraight([11,0,9,9,0]))