/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 // 模拟出栈入栈过程
var validateStackSequences = function(pushed, popped) {
	if (pushed.length == 0) {
		return true;
	}
	let stack = [];
	for (let i = 0, j = 0; i < pushed.length;) {
		if (pushed[i] == popped[j]) {
			j++;
			i++;
			console.log("pop immidiately");
		} else {
			stack.push(pushed[i]);
			i++;
			console.log(stack);
		}		
		while(j < poped.length && stack[stack.length-1] == popped[j]){
			console.log("pop: "+stack[stack.length-1]);
			stack.pop();
			j++;
		}
	}
	if(stack.length == 0) {
		return true;
	}
	return false;
}; 

var pushed = [1,2,3,4,5];
var poped = [4,5,3,2,1];
console.log(validateStackSequences(pushed,[4,3,5,1,2]));
