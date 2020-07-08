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
var isSymmetric = function(root) {
    if (!root) {
		return true;
	}
	var mirrorTree = function(root) {
		if (!root) {
			return root;
		}
        let res = new TreeNode(root.val);
		res.left = mirrorTree(root.right);
        res.right = mirrorTree(root.left);
		return res;
	};
	var compareTree = function(root1,root2) {
		if (!root1 && !root2) {
			return true;
		}
		if(!root1 || !root2) {
			return false;
		}
		return root1.val==root2.val && compareTree(root1.left,root2.left) && compareTree(root1.right,root2.right);
	}
	return compareTree(root.left,mirrorTree(root.right));
};