/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 
var removeNthFromEnd = function(head, n) {
    // create a dummy node before the head,
    // بداها قبل الهيد عشان هيك منخليه يلف لحد n+1
    let result = new ListNode (0 , head )

    let slow = result 
    let fast = result 

    // move the fast pointer n+1 steps ahead (to create a gap of n between fast and slow)
    for ( let i=0 ; i<=n ; i++) { fast = fast.next }


    while (fast != null){
        fast = fast.next
        slow=slow.next 

    }
    
    // skip the node at slow.next
    slow.next = slow.next.next

    // return the modified list, starting from the original head (result.next)
    return  result.next

    
};