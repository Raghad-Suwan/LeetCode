/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * depth first search 
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    

    if( root == null ) return 0;

    let theLeft = maxDepth(root.left) ;
    let theRight= maxDepth(root.right) ; 

    return 1+ (Math.max (theLeft , theRight ))
    
};