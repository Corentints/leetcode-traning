function subsetXORSum(nums: number[]): number {
    let result = 0;
    
    const dfs = (value: number, index: number) => {
        if (index < nums.length) {
            dfs(value ^ nums[index], index + 1);
            dfs(value, index + 1);
        }

        if (index == nums.length) {
            result += value;
        };
    }

    dfs(0, 0);
    return result;
};
