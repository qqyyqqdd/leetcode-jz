/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
	if(!numbers){
		return [null,null];
	}
	let index1 = 0;
	let index2 = numbers.length-1;
	while(index1 < index2) {
		if(numbers[index1] + numbers[index2] == target) {
			return [index1+1,index2+1];
		} else if(numbers[index1] + numbers[index2] < target){
			index1++;
		}else {
			index2--;
		}
	}
	return [-1,-1];
};

console.log(twoSum([2,7,11,15],9));