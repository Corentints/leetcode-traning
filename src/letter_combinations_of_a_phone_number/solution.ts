const phoneKeyboard = [
    ['a', 'b', 'c'], 
    ['d', 'e', 'f'], 
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
];

function letterCombinations(digits: string): string[] {
  const result: string[] = [];
  if (digits.length === 0) {
    return result;
  }

  const backtrack = (combination: string, nextDigits: string) => {
    if (nextDigits.length === 0) {
      result.push(combination);
      return;
    }

    const digit = nextDigits[0];
    const letters = phoneKeyboard[parseInt(digit, 10) - 2];  // -2 phone keyboards starts at 2
    for (const letter of letters) {
      backtrack(combination + letter, nextDigits.substring(1));
    }
  };

  backtrack('', digits);
  return result;
}
