/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
	if(!root) {
		return null;
	}
	let pre = null;

	function getList(pre,root) {
		if (!root){
			return root;
		}
		
		if(root.left) {
			pre = getList(pre,root.left);
		}
		root.left = pre;
		if(pre){
			pre.right = root;
		}
		pre = root;
		if(right) {
			pre = getList(pre,root.right);
		}
		return pre;
	}(pre,root);

	let head = pre;
	for(;head.left != null; head = head.left);
	head.left = pre;
	pre.right = head;
	return head;
};