/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
	var canDivided = function(order,beg,end) {
		if(beg >= end) {
			return true;
		}
		let mid = order[end];
		let div = null;
		for (div = beg; div < end && order[div] < mid; div++);
		for (let i = div; i < end; i++) {
			if (order[i] < mid){
				return false;
			}
		}
		return canDivided(order,beg,div-1) && canDivided(order,div,end-1);
	}
	return canDivided(postorder,0,postorder.length-1);
};

console.log(verifyPostorder([]));
console.log(verifyPostorder([1,6,3,2,5]));
console.log(verifyPostorder([1,3,2,6,5]));