/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
	if (!root) {
		return false;
	}
	let queue = [root.val];
	let res = [];
	while (queue.length != 0) {
		let node = queue.shift();
		res.push(node);
		if(node.left) {
			queue.push(node.left);
		}
		if(node.right) {
			queue.push(node.right);
		}		
	}
	return res;
};
