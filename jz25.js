/**
 * Definition for singly-linked list. */
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	if (l1 == null) {
		return l2;
	}
	if (l2 == null) {
		return l1;
	}
	var res = new ListNode('-');
	var resp = res;
	while(l1 != null && l2 != null) {
		if(l1.val <= l2.val) { // 较小的并入
			resp.next = l1;
			l1 = l1.next;
		}else {
			resp.next = l2;
			l2 = l2.next;
		}
		resp = resp.next;
	}
	if (l1 != null) {
		resp.next = l1;
	}
	if (l2 != null) {
		resp.next = l2;
	}
	return res.next;
};
