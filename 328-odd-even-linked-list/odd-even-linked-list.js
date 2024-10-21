/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {

    if ( !head || !head.next) return head 

    let odd = new ListNode(0) // Dummy node for the odd indexed nodes
    let oddInx = odd          // Pointer to build the odd list

    let even = new ListNode(0)
    let evenInx = even 

    let idx= 1 

    while ( head != null) {

        if ( idx %2 == 0){
            evenInx.next = head 
            evenInx =evenInx.next
        }else {
            oddInx.next =head
            oddInx = oddInx.next 
        }
        head =head.next 
        idx++ 
    }
    evenInx.next = null 
    oddInx.next = even.next 

    return odd.next
    
};