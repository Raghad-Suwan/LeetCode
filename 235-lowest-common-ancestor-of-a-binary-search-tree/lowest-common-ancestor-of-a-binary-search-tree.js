/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null 

    if (p.val!= q.val){
        if(root.val>p.val && root.val<q.val){
            return root 
        }
        else if (q .val >root.val  &&  p.val>root.val ){
            return lowestCommonAncestor(root.right ,p ,q)
        }
        else if (q.val < root.val && p.val <root.val){ 
            return lowestCommonAncestor (root.left , p , q)
        }

        return root 

    }
    
};