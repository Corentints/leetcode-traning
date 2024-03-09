/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
     let totalSum = 0;

    function dfs(node, currentNumber) {
        if (!node) return;

        currentNumber = (currentNumber << 1) | node.val;

        if (!node.left && !node.right) {
            totalSum += currentNumber;
            return;
        }

        dfs(node.left, currentNumber);
        dfs(node.right, currentNumber);
    }

    dfs(root, 0);
    return totalSum;
};

