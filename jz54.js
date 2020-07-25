/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 // 反向中序遍历：右中左
var kthLargest = function(root, k) {
	if(!root) {
		return -1;
	}
	let res = [];
	function midSearch(root,res,k) {
		if(!root || res.length == k) {
			return;
		}
		if(root.right) {
			midSearch(root.right,res,k);	
		}
        // console.log("after right: "+res);
        if(res.length == k) {
            return;
        }
		res.push(root.val);
		if(root.left) {
			midSearch(root.left,res,k);
		}
        if(res.length == k) {
            return;
        }
        // console.log("after res:" +res);
	}	
	midSearch(root,res,k);
	return res.pop();
};