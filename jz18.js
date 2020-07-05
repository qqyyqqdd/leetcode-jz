/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
	if (head == null) {
		return head;
	}
	let p = head;
	let q = p.next;
	// 删除头结点
	if (p.val == val) {
		head = head.next;
		return head;
	}
	// 删除后续中的节点
	for (;q != null; p = p.next, q = p.next) {
		if (q.val == val) {
			p.next = q.next;
			// delete q;
			break;
		}
	}
	// 找不到指定val时返回原链表
	return head;
};

// 骚操作,但是效率没有提高
deleteNode = function(head,val) {
	if(head.val == val) {
		return head.next;
	}
	head.next = deleteNode(head.next,val);
	return head;
}