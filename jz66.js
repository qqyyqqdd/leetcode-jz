/**
 * @param {number[]} a
 * @return {number[]}
 */
 // 构建矩阵，分别与上下三角乘
var constructArr = function(a) {
	let b = new Array(a.length).fill(1);
	console.log(b);
	for(let i = 1; i < b.length ;i++) {
		b[i] = b[i-1] *a[i-1];
	}
	for (let i = b.length-2, tmp = 1; i >= 0; i--) {
		tmp *= a[i+1];
		b[i] *= tmp;
	}
	return b;
};

console.log(constructArr([1,2,3,4,5]));