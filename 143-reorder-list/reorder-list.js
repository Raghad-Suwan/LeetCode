/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    if (head == null || head.next==null ) return 

    // Find the middle
    let slow =head , fast  =  head 

    while ( fast &&fast.next){
        slow = slow.next 
        fast = fast.next.next
    }
    // now , slow in the middle  

    // reverse the second half of the list starting from slow
    previous = null 
    current = slow 

    while (current ){
        let next = current.next 
        current.next = previous 
        previous = current 
        current = next 

    }


    //  merge the two halves
   let theFirst = head
   let theSeconed = previous 

   while (theSeconed.next) {
    temp1= theFirst.next
    temp2=theSeconed.next

    theFirst.next =theSeconed
    theSeconed.next = temp1 

    theFirst=temp1
    theSeconed = temp2





   }
};
