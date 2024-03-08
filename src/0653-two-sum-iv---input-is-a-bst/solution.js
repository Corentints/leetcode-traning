/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


const find = function(root, k, map) {
    if (root === null) return false;
    
    const target = k - root.val
    if (map.get(target)) {
        return true;
    }
    
    map.set(root.val, true)
    return find(root.left, k, map) || find(root.right, k, map)  
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const map = new Map()
    return find(root, k, map)
};
