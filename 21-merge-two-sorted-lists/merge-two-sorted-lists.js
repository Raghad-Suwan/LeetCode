/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2
    if(!list2 ) return list1 

    let head =null 
    let tail =null 

     // Initialize the head and tail pointers
    if (list1.val <= list2.val) {
        head = tail = list1;
        list1 = list1.next;
    } else {
        head = tail = list2;
        list2 = list2.next;
    }


    // Merge the remaining nodes

    while ( list1 &&list2){
        if (list1.val <= list2.val){
            tail.next =list1
            tail = list1
            list1 = list1.next
        }else {
            tail.next =list2
            tail = list2
            list2 = list2.next

        }


    }
    tail.next =  list1 ? list1 : list2;
    return head
};