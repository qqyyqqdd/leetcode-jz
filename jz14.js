/**
 * @param {number} n
 * @return {number}
 */

 // 动态规划法
var cuttingRope = function(n) {
	var dp = new Array(n+1);
	dp.fill(1);
	dp[0] = -1;
	dp[1] = 0;
	dp[2] = 1;
	dp[3] = 2;
	for (let i = 4; i <= n; i++) {
		for(let j = 1; j <= (i/2); j++) {
			dp[i] = Math.max(dp[i],j*(i-j),dp[i-j]*j);
		}
	}
	console.log(dp);
	return dp[n];
};

console.log(cuttingRope(7));
console.log(cuttingRope(8));
// 贪心法
var cuttingRope2 = function(n) {
	if(n <= 3){
        var dp = [-1,0,1,2];
        return dp[n];
    }   
	else
	{
		let three = parseInt(n/3); 
        // let rest = n%3;
        let res = 1;
        for (let i = 0; i < three-1; i++) {
        	res *= 3;
        	res %= (1e9+7);
        }
        switch (n%3) {
        	case 0:
        		return res*3%(1e9+7);
        	case 1:
        		return res*4%(1e9+7);
        	case 2:
        		return res*6%(1e9+7);
        }
		// console.log("three:"+three+",two:"+two);
		// return Math.pow(3,three)*Math.pow(2,two)%(1e9+7);
	}
}

console.log("贪心法7：" +cuttingRope2(7));
console.log("贪心法8：" +cuttingRope2(8));
console.log("贪心法10：" +cuttingRope2(10));
console.log(cuttingRope2(120));
