/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// 哈希表解法
var copyRandomList = function(head) {
   if (!head) {
        return null;
    }
    const map = new Map();
    let node = head; // 当前节点
    const newHead = new Node(node.val);
    let newNode = newHead; // 当前节点的copy
    map.set(node, newNode);

    while (node.next) {
        newNode.next = new Node(node.next.val);
        node = node.next;
        newNode = newNode.next;
        map.set(node, newNode);
    }

    newNode = newHead;
    node = head;
    while (newNode) {
        newNode.random = map.get(node.random);
        newNode = newNode.next;
        node = node.next;
    }

    return newHead;
};



// 节点后copy再拆分链表
copyRandomList = function(head) {
	if (!head) {
		return [];
	}
	// 在每个节点后插入一个数值相同的节点
	for (let p = head; p != null; p = p.next.next) {
		let q = new Node(p.val, p.next, null);
		p.next = q;
	}
	// 复制节点的random指针指向
	for(let p = head, q = p.next; p != null && q != null; p = q.next, q = p.next) {
		q.random = p.random.next;
	}
	// 拆分链表
	let copy = head.next;
	for(let p = head, q = head.next; p != null; p = p.next, q = q.next) {
		p.next = q.next;
		if(p.next) {
			q.next = p.next.next;
		}else  {
			q.next = null;
		}
	}
	return copy;
}
