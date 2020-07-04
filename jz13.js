/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
	function getSum(num) {
		let sum = 0;
		while(num) {
			sum += num%10;
			num = parseInt(num/10);
		}
		return sum;
	}

	if (m == 0 || n == 0) {
		return -1;
	}

	// 方向数组
	const direction = [[-1,0],[1,0],[0,-1],[0,1]];

	let queue = [[0,0]];
	let set = new Set(['0,0']);
	while (queue.length) {
		let [x,y] = queue.shift();
		// console.log([x,y]);
		for (let i = 0 ; i < 4; i++) {
			let tmpX = x+direction[i][0];
			let tmpY = y+direction[i][1];

			if (tmpX < 0 || tmpX >= m || tmpY < 0 || tmpY >= n || getSum(tmpX)+getSum(tmpY)>k || set.has(`${tmpX},${tmpY}`)) { // 越界
				continue;
			}
			set.add(`${tmpX},${tmpY}`);
			queue.push([tmpX,tmpY]);
			// console.log(set);
			// console.log(queue);
		}
	}
	return set.size;
};

console.log("movingCount: "+ movingCount(3,1,0));
/*var set = new Set('0,0');
console.log(set);
set.add('0,0');
console.log(set);
set.add('1,1');
console.log(set);
console.log(set.has('0,0'));*/