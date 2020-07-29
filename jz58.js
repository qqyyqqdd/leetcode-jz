/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if(!s || s.length == 0) {
    	return s;
    }
    let words = s.split(/ +/);
    let res = '';
    for(let i = words.length-1; i >= 0; i--) {
    	res += words[i]+' ';
    }

    return res.trim();
};

console.log('['+reverseWords("   the sky     is blue")+']');