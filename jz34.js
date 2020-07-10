/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root) {
		return [];
	}
	let res = [];
    function getPath(root,sum,path) {
		if(!root) {
			return;
		}
		else {
            if (!root.left && !root.right) { // leaf node
                if(root.val == sum) {
                    path.push(root.val);
                    res.push(path.slice());
                    path.pop();
                }
                return;
            }else { //no-leaf node
                path.push(root.val);
                getPath(root.left, sum-root.val,path);
                getPath(root.right,sum-root.val,path);
                path.pop();
                return
            }
		}
	}
	getPath(root,sum,[]);
	return res;
};