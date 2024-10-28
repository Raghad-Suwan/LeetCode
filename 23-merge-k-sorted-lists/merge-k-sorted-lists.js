/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists || lists.length ===0 ){
        return null 
    }

    while (lists.length >1 ){
        let  temp =[]
        for (let i=0 ; i< lists.length ; i +=2 ){
            let l1 =lists[i] 
            let l2
            if ( i+1 < lists.length ){
                l2 = lists[i+1]
            } else  l2=null 
            temp.push( mergingLists (l1, l2 ))
        }
        lists = temp 
    }
    return lists[0]

    
};

function mergingLists( l1 , l2 ){
        let node = new ListNode();
        let ans= node 

        while (l1 && l2 ){

            if (l1.val > l2.val ){
                node.next = l2 
                l2 = l2.next 
            }
            else {
                node.next =l1 
                l1 = l1.next 
            }
            node = node.next 
        }
         if (l1) {
            node.next = l1;
            } else {
                node.next = l2;
            }
     return ans.next           
    }