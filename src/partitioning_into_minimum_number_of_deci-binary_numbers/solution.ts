function minPartitions(n: string): number {
  let maxDigit = 0;
  for (const digit of n) {
    maxDigit = Math.max(maxDigit, Number(digit));
    if (maxDigit === 9) {
      return 9;
    }
  }
  return maxDigit;
}