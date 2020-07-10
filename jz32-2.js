/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	if (!root) {
		return [];
	}
	let res = [];
	let queue = [root];
	while (queue.length > 0) {
		let row = [];
		let rowsize = queue.length;
		while (row.length < rowsize) {
			let node = queue.shift();
			row.push(node.val);
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
		res.push(row);
	}
	return res;
};