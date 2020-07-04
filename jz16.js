/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 // 二分法
var myPow = function(x, n) {
	function getPow(x,n) {
		if(n == 0) {
			return 1;
		}
		if(n%2 == 0) {
			let p = getPow(x,n/2);
			return p*p;
		}
		else {
			let p = getPow(x,(n-1)/2);
			return p*p*x;
		}
	}
	let res = getPow(x,Math.abs(n));
	if (n < 0) {
		return 1/res;
	}
	return res;
};

var num = -8;
var flag = num&1;
var a = num>>1;
console.log(flag)
console.log(a);
// 快速幂 https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/solution/mian-shi-ti-16-shu-zhi-de-zheng-shu-ci-fang-kuai-s/
/* 
	求x的n次方，
	将n展开为n = 1*n1+2*n2+4*n3...+2`m-1*nm
	既x`n = x`1n1*x`2n2*x`4n3...x`(2`m-1nm)
*/
// 一直超时，不知道为啥
myPow = function(x,n) {
	console.log("快速幂");
	if (x == 0){
		return 0;
	}
	let sig = 1;
	if(n < 0) {
		sig = 0;
		n = -n;
	}
	let res = 1;
	let flag = 0;
	while(n != 0) {
		if((n&1) ==0 ) {
			res *= x;
		}
		n = n>>1;
		x = x*x;
	}

	return sig?res:1/res;
}

console.log(myPow(8,-9));
console.log(Math.pow(8,-9));