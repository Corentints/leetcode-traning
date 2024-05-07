function jump(A: number[]): number {
  let jumps = 0;
  let end = 0;
  let max = 0;

  for (let i = 0; i < A.length - 1; i++) {
    max = Math.max(max, i + A[i]);
    if (i === end) {
      jumps++;
      end = max;
    }
  }

  return jumps;
}
