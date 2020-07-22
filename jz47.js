/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
	let row = grid.length;
	let col = grid[0].length;
	for(let i = 0; i < row; i++) {
		for(let j = 0; j < col; j++) {
			if(i == 0 && j == 0) { // 矩阵第一个元素
			} else if(j == 0) { // 矩阵第一列元素
				grid[i][j] += grid[i-1][j];
			} else if(i == 0) { //矩阵第一行元素
				grid[i][j] += grid[i][j-1];
			} else {
				grid[i][j] += Math.max(grid[i-1][j],grid[i][j-1]);
			}
		}
	}
	return grid[row-1][col-1];
};

console.log(maxValue([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]));