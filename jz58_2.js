/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 // 字符法
var reverseLeftWords = function(s, n) {
	let res = s.split('');
	// let tail = [];
	for(let i = 0; i < n; i++) {
		let ch = res.shift();
		res.push(ch);
		// console.log(ch);
		// console.log(res);
	}
	return res.join('');
};
// 切片法
reverseLeftWords = function(s, n) {
	let r = s.slice(0,n);
	let l = s.slice(n);
	console.log("l: "+l);
	console.log('r: '+r);
	return l+r;
}
console.log(reverseLeftWords("abcdefg",2));