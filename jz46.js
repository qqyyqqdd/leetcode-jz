/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
	let str = num.toString();
	if(str.length == 1) {
		return 1;
	}
	if(str.length == 2 ) {
		return num > 25? 1:2;
	}
	if(parseInt(str[0]+str[1]) <= 25) {
		return translateNum(parseInt(str.slice(1)))+translateNum(parseInt(str.slice(2)));
	} else {
		return translateNum(parseInt(str.slice(1)));
	}
};

