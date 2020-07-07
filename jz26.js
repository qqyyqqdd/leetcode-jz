/**
 * Definition for a binary tree node.
 *  */function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
	if (B == null) {
        return false;
    }
    if (A ==  null) {
        return false;
    }
    let queue = new Array();
    queue.push(A);
    while (queue.length != 0) {
    	node = queue.shift();
    	if(node.val == B.val) {
    		if(getRes(node,B)) {
    			return true;
    		}
    	}
    	queue.push(node.left);
    	queue.push(node.right);
    }
    return false;
};

var getRes = function(A,B) {
	if (B == null) {
        // console.log("b==null");
        return true;
        }
    if (A == null) { // B!=null
        // console.log("a==null")
        return false;
    }
    if (A.val == B.val) {
        // console.log(A.val+' = '+B.val);
        return getRes(A.left,B.left) && getRes(A.right,B.right);
    }else {
        // console.log(A.val+' != '+B.val);
        return false;
    }
}

var A1 = new TreeNode(4);
A1.left = new TreeNode(2);
A1.right = new TreeNode(3);
A1.left.left = new TreeNode(4);
A1.left.right = new TreeNode(5);
A1.right.left = new TreeNode(6);
A1.right.right = new TreeNode(7);
A1.left.left.left = new TreeNode(8);
A1.left.left.right = new TreeNode(9);
var B1 = new TreeNode(4);
B1.left = new TreeNode(8);
B1.right = new TreeNode(9);
console.log(isSubStructure(A1,B1));