function combinationSum(candidates: number[], target: number): number[][] {
    candidates = candidates.sort((a, b) => a - b);
    const result: number[][] = [];

    function dfs(addition: number[], startIndex: number) {
        const additionResult = addition.reduce((a, b) => a + b, 0);

        if (additionResult === target) {
            result.push([...addition]);
            return;
        }

        if (additionResult > target) {
            return -1; // target is between 1 and 40, so -1 is not a possible result
        }

        for (let i = startIndex; i < candidates.length; i++) {
            addition.push(candidates[i]);

            if (dfs(addition, i) === -1) {
                addition.pop();
                break;
            };
          
            addition.pop();
        }

    }

    dfs([], 0);

    return result;
};