/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function dst(item: ListNode | null, head: ListNode) {
    if (item === null) {
        return head;
    }

    return dst(item.next, new ListNode(item.val, head));
}

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return head;
    }

    return dst(head, null);
};
