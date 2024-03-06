/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
     const MOD = 1e9 + 7;
    let dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(0));
    dp[0][0] = 1; // Base case: 0 dice to get sum 0

    for (let dice = 1; dice <= n; dice++) {
        for (let currentSum = 1; currentSum <= target; currentSum++) {
            for (let face = 1; face <= k; face++) {
                if (currentSum - face >= 0) {
                    dp[dice][currentSum] = (dp[dice][currentSum] + dp[dice - 1][currentSum - face]) % MOD;
                }
            }
        }
    }

    return dp[n][target];
};

