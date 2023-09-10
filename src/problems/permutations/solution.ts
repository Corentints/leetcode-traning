function permute(nums: number[]): number[][] {
    const permutations: number[][] = [];

    function dfs(permutation: number[]) {
        if (permutation.length === nums.length) {
            permutations.push(permutation);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!permutation.includes(nums[i])) {
                permutation.push(nums[i]) 
                dfs([...permutation]);
                permutation.pop();
            }
        }
    }

    dfs([]);
    return permutations;
};