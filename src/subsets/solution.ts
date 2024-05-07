function subsets(nums: number[]): number[][] {
    const subsets: number[][] = [[]];

    function dfs(subset: number[] = [], startIndex: number = 0) {
        if (subset.length > 0 && !subsets.includes(subset)) {
            subsets.push(subset);
        }

        for (let i = startIndex; i < nums.length; i++) {
            subset.push(nums[i]);
            dfs([...subset], i + 1);
            subset.pop();
        }
    }

    dfs();
    return subsets;
};