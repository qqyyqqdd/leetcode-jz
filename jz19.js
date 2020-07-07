/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
	// 模式串为空
	if (p.length == 0) {
		return (s.length==0);
	}
	// 主串为空
	if (s.length == 0) {
		if(p.length%2 == 0) {
			for (let i in p) {
				if (i%2 == 1 && p[i] != '*') {
					return false;
				}
			}
			return true;
		}
		return false;
	}
	// 主串模式串都非空
	let s1 = s[0];
	let p1 = p[0], p2 = p[1];
	if(p2 == '*') {
		if(p1 == s1 || p1 == '.') {
			console.log('1');
			let res = (isMatch(s.substring(1),p)||isMatch(s,p.substring(2)));
			console.log('p = '+p+'; s = '+s+'; res = '+res);
			return res;
		}else {
			console.log('2');
			let res = isMatch(s,p.substring(2));
			console.log('p = '+p+'; s = '+s+'; res = '+res);
			return res;
		}
	}else {
		if (p1 == s1 || p1 == '.') {
			console.log('3');
			let res = isMatch(s.substring(1),p.substring(1));
			console.log('p = '+p+'; s = '+s+'; res = '+res);
			return res;
		}else {
			console.log('4:false');
			return false;
		}
	}
};

console.log("final res: "+isMatch('bbbba','.*a*a'));



