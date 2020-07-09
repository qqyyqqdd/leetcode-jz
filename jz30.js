/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.stack = [];
	this.minS = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	this.stack.push(x);
	if (this.minS.length == 0) {
		this.minS.push(x);
	}
	else {
		if(x <= this.minS[this.minS.length-1]) {
			this.minS.push(x);
		}
	}
	
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	let tmp = this.stack.pop();
	if (this.minS[this.minS.length-1] == tmp) {
		this.minS.pop();
	}
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
	return this.minS[this.minS.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
