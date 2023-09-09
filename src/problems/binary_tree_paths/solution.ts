/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

type TreeNodeOrNull = TreeNode | null

function binaryTreePaths(root: TreeNode | null): string[] {
    let result = [];
    function backtrack(left: TreeNodeOrNull, right: TreeNodeOrNull, path: string) {
        // we cant go deeper
        if (left === null && right === null) {
            result.push(path);
            return;
        }
        // left side
        if (left !== null) {
            backtrack(left.left, left.right, path + '->' + left.val)
        }
        // right side
        if (right !== null) {
            backtrack(right.left, right.right, path + '->' + right.val)
        }
    }

    backtrack(root.left, root.right, '' + root.val);
    return result;
};