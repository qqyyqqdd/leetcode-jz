/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
	arr.sort(compareNums);
	return arr.slice(0,k);
};

function compareNums(num1,num2) {
	return num1-num2;
}