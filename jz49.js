/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
	if(n <= 0) {
		return 0;
	}
	let ugly = [];
	let p2 = 0, p3 = 0, p5 = 0;
	ugly.push(1);
	for (let i = 1; i < n; i++) {
		let tmp = Math.min(ugly[p2]*2,ugly[p3]*3,ugly[p5]*5);
		if(ugly.indexOf(tmp)<0) {
			ugly.push(tmp);
		} else {
			i--;
		}
		
		if(tmp == ugly[p2]*2) {
			p2++;
		} else if(tmp == ugly[p3]*3) {
			p3++;
		} else {
			p5++;
		}
	}
	return ugly.pop();
};

console.log(nthUglyNumber(1352));