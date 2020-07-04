/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 // 字符串做法
var hammingWeight = function(n) {
    const str = n.toString(2);
	console.log(str);
	var count = 0;
	for (let i =0; i < str.length; i++) {
		if (str[i] == '1') {
			count++;
		}
	}
	return count;
};

// 位运算做法
hammingWeight = function(n) {
	console.log("位运算");
	let count = 0;
	while(n != 0) {
		n = n&(n-1);
		count++;
	}
	return count;
}

console.log(hammingWeight(255));