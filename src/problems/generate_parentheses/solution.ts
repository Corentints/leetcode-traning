function generateParenthesis(n: number): string[] {
    let result = [];

    function backtrack(left: number, right: number, s: string) {
        if (s.length === n * 2) {
            result.push(s);
        }

        if (left < n) {
            backtrack(left + 1, right, s + '(');
        }

        if (right < left) {
            backtrack(left, right + 1, s + ')')
        }
    }

    backtrack(0, 0, '')
    return result;
};
