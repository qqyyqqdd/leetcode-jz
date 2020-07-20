/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let res  = 0;
    let high = 0;
    let low = 0;
    let digit = 1;
    for(;digit <= n; digit *= 10) {
        low = n % digit;
        high = parseInt(n/(digit*10));
        let cur = parseInt((n%(digit*10))/digit);
        if (cur > 1) {
            res += (high+1)*digit;
        } else if(cur == 1) {
            res += high*digit +low+1;
        } else {
            res += high*digit;
        }
    }
    return res;
};