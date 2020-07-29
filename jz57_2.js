/**
 * @param {number} target
 * @return {number[][]}
 */
 // 滑动窗口法
var findContinuousSequence = function(target) {
	if(target <= 0) {
		return [];
	}
	let l = 1, r = 1;
	let res = [];
	// l,r为左闭右开区间
	while(r < target && l <=r ) {
		let sum = ((l+r-1)*(r-l))/2;
		if(sum < target) {
			r++;
		} else if(sum > target) {
			l++;
		} else {
			tmp = [];
			for(let i = l; i < r; i++) {
				tmp.push(i);
			}
			res.push(tmp);
			l++;
			r++;
		}
	}
	return res;
};

console.log(findContinuousSequence(15));