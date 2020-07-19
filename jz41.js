/**
 * initialize your data structure here.
 */

function compareNum(num1,num2) {
	return num1-num2;
}
var MedianFinder = function() {
	this.arr = [];
	this.length = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
	this.arr.push(num);
	this.length++;
	this.arr.sort(compareNum);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
	if(this.length == 0) {
		return null;
	}
	if(this.length%2 == 0) {
		return (this.arr[this.length/2-1]+this.arr[this.length/2])/2;
	} else {
		return this.arr[parseInt(this.length/2)];
	}
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */