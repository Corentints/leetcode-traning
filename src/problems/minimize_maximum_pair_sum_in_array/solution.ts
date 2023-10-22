function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let maxPairSum = 0;
  const n = nums.length;
  
  for (let i = 0; i < n / 2; i++) {
    const pairSum = nums[i] + nums[n - i - 1];
    maxPairSum = Math.max(maxPairSum, pairSum);
  }
  
  return maxPairSum;
}