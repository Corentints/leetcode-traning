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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let leadPointer = head;
    let trailPointer = head;

    for (let i = 0; i < n; i++) {
        leadPointer = leadPointer.next;
    }

    if (!leadPointer) {
        return head.next;
    }

    while (leadPointer.next) {
        leadPointer = leadPointer.next;
        trailPointer = trailPointer.next;
    }

    trailPointer.next = trailPointer.next.next;

    return head;
};