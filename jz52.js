/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 计算长度求公共节点
var getIntersectionNode = function(headA, headB) {
	if(!headA || !headB) {
		return null;
	}
	let lenA = 0, lenB = 0;
    for(let p = headA; p != null; p = p.next,lenA++);
    for(let p = headB; p != null; p = p.next,lenB++);
    let d = lenA -lenB;
	let long = null, short = null;
	if(d > 0) {
		long = headA;
		short = headB;
	} else {
		long = headB;
		short = headA;
	}
	for(let i = 0; i < d; i++,long = long.next);
	while(long && short) {
		if(long == short) {
			return long;
		}
		long = long.next;
		short = short.next;
	}
	return null;
};

// 双指针浪漫相遇
getIntersectionNode = function(headA, headB) {
	if(!headA || !headB) {
		return null;
	}
	let p = headA;
	let q = headB;
	while(p != q) {
		p = p.next?p.next:headB;
		q = q.next?q.next:headA;
	}
	return p;
} 