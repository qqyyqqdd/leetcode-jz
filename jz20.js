/**
 * @param {string} s
 * @return {boolean}
 */

 // 穷举
var isNumber = function(s) {
	s = s.trim();
	let eflag = false;
	let dotflag = false
	if (s.length == 0) {
		return false;
	}
	for (let i = 0; i < s.length; i++) {
		// e 只出现一次，前一位为数字或.，后一位为数字或‘+’‘-’
		console.log(s[i]);
		if(s[i]=='e') {
			console.log("is e");
			if (eflag || i < 1 || i >= s.length-1) {
				return false;
			}else {
				if (((s[i-1]>=0&&s[i-1]<=9&&s[i-1]!=' ') || s[i-1] == '.') && ((s[i+1]>=0&&s[i+1]<=9&&s[i+1]!=' ') || s[i+1] == '+' ||s[i+1] == '-')){
					eflag = true;
					continue;
				}else{
					return false;
				}
			}
		}else if(s[i] == '.') {
			console.log('is .');
			if(dotflag || eflag){
				return false;
			}else {
				if ((s[i-1]>=0&&s[i-1]<=9&&s[i-1]!=' ') || (s[i+1]>=0&&s[i+1]<=9&&s[i+1]!=' ')){
					dotflag = true;
					continue;
				}
				else {
					return false;
				}
			}
		}else if (s[i] == '+' || s[i] == '-') {
			console.log('is +/-');
			if(i == 0 || (s[i-1] == 'e' && s[i+1]>=0 && s[i+1] <=9 && s[i+1]!=' ')){
				continue;
			}else {
				return false;
			}
		}else if (s[i]>=0 && s[i] <=9 && s[i]!=' '){
			console.log('is number');
			continue;
		}else {
			console.log("illegal input");
			return false;
		}
	}
	return true;
};


// 正则
// 偷懒