/**
 * Definition for singly-linked list. */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 // 不新建别的数据结构存储数据
var reverseList = function(head) {
	if (head == null) {
		return head;
	}
	let p = head;
	let q = head.next;
	for(;q != null; q = head.next){
		head.next = q.next;
		q.next = p;
		p = q;
	}
	return p;
};

// 使用栈,不推荐
reverseList = function(head) {
	if (head == null || head.next == null) {
		return head;
	}
	var stack = new Array();
	for (let p = head; p != null; p = p.next) {
		stack.push(p);
	}
	head = stack[stack.length-1];
	for(let i = stack.length-1; i > 0; i--) {
		stack[i].next = stack[i-1];
	}
	stack[0].next = null;
	return head;
}

var list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
console.log(reverseList(list));