/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) {
		return 0;
	}
	let dp = new Array(s.length);
	dp[0] = 1;
	for(let i = 1; i < s.length; i++) {
		let front = s.slice(i-dp[i-1],i);
		let index = front.indexOf(s[i]);
		if(index < 0) { // 前串中不含重复值,或重复的字符不在前一位的无重复范围内
			dp[i] = dp[i-1]+1;
		} else { // 重复的字符在前一位的无重复范围内
			dp[i] = front.length - index;
		}
	}
	return dp.sort((a,b) => a-b)[dp.length-1];
};