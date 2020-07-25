/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
	if(!root) {
		return true;
	}
	var maxDepth = function(root) {
		if(!root) {
			return 0;
		}
		return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
	};
	let d = maxDepth(root.left)-maxDepth(root.right);
	return d<=1&&d>=-1? isBalanced(root.left)&&isBalanced(root.right):false;
};


