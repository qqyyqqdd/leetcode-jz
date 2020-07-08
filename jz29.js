/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length){
    	return matrix;
    }
    let t = 0, b = matrix.length-1, l = 0, r = matrix[0].length-1;
    let res = new Array();

    while (l <= r && t <= b) {
    	for (let j = l; l <= r && j <= r ; j++) {
    		res.push(matrix[t][j]);
    	}
    	t++;
    	if(t > b) {
    		return res;
    	}
    	for (let i = t; t<=b && i <= b ;i++) {
    		res.push(matrix[i][r]);
    	}
    	r--;
    	if (l > r) {
    		return res;
    	}
    	for (let j = r; l <= r && j >= l; j--) {
    		res.push(matrix[b][j]);
    	}
    	b--;
    	for (let i = b ; t <= b && i>=t; i--) {
    		res.push(matrix[i][l]);
    	}
    	l++;
    }
    return res;
};

var matrix=[[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(matrix));
