/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 要求时间复杂度是O(n)，空间复杂度是O(1)
// hit:两个相等的数异或等于零
// 先异或再分组，得到的exOr中为1的位既为两个不同的数的二进制不同位
var singleNumbers = function(nums) {	
	let exOr = 0;
	for (let i in nums) {
		exOr ^= nums[i];
	}
	console.log(exOr);
	let div = 1;
	let gA = 0, gB = 0;
	while(!(div&exOr)) {
		div <<= 1;
		console.log('div = '+div);
	}
	console.log(div);
	for(let i in nums) {
		if(nums[i]&div) {
			console.log('in A : '+nums[i]);
			gA ^= nums[i];
		}else {
			console.log('in B : '+nums[i]);
			gB ^= nums[i];
		}
	}
	return [gA,gB];
};

console.log(singleNumbers([1,2,5,2]));