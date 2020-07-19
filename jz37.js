/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) {
    	return "";
    }
    let res = [];
    let queue = [];
    queue.push(root);
    while(queue.length > 0) {
    	node = queue.shift();
    	if(node != null) {
            res.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
    	} else {
    		res.push(null);
    	}
    }
    while(res[res.length-1] == null) {
        res.pop();
    }
    console.log(res);
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data.length == 0) {
        return null;
    }
    let root = new TreeNode();
    let queue = [];
    queue.push(root);
    while(data.length > 0) {
        let val = data.shift();
        let node = queue.shift();
        node.val = val;
        if(val) {    
            node.left = new TreeNode();
            node.right = new TreeNode();
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    console.log(root);
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */