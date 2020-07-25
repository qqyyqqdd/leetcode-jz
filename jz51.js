/**
 * @param {number[]} nums
 * @return {number}
 */
var count = 0;

var reversePairs = function(nums) {
	count = 0;
	function MergeSort(nums, beg, end) {
		console.log(nums.slice(beg,end+1));
		if (end-beg <=0) {
			return;
		}
		let mid = parseInt((beg+end)/2);
		MergeSort(nums,beg,mid);
		MergeSort(nums,mid+1,end);
		let pl = beg;
		let pr = mid+1;
		let res = [];
		while(pl <= mid && pr <= end) {
			console.log("pl -> "+nums[pl]);
			console.log("pr -> "+nums[pr]);
			if(nums[pl] <= nums[pr]) {
				res.push(nums[pl]);
				pl++;
			} else {
				res.push(nums[pr]);
				count += mid-pl+1;
				pr++;
				console.log("cur count = "+count);
			}
			console.log("res = " +res);
		}
		if(pl <= mid) {
			while(pl <=  mid ) {
				res.push(nums[pl]);
				pl++;
			}
		}
		if(pr <= end) {
			while(pr <= end) {
				res.push(nums[pr]);
				pr++;
			}
		}
		console.log("res = "+res);
		for(let i = beg,j = 0; i <= end; i++,j++) {
			nums[i] = res[j];
		}
		console.log(nums);
	}
	MergeSort(nums,0,nums.length-1);
	return count;
};

console.log(reversePairs([4,5,6,7]));