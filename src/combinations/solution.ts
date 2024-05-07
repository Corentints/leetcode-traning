function combine(n: number, k: number): number[][] {
    const combinations = [];

    function dfs(combination: number[]) {
        if (combination.length === k) {
            combinations.push([...combination]);
            return;
        }

        for (let i = (combination[combination.length - 1] || 0) + 1; i <= n; i++) {
            combination.push(i);
            dfs(combination);
            combination.pop();
        }
    }

    dfs([]);
    return combinations;
};