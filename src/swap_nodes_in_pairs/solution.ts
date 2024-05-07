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

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    
    const currentHead = head;
    const next = head.next;
    const nextNext = next.next;
    
    currentHead.next = swapPairs(nextNext);
    next.next = currentHead;
    
    return next;
};