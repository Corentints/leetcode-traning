function lengthOfLongestSubstring(s: string): number {
    let longestSubString: string[] = [];
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        const index = longestSubString.indexOf(s[i]);

        if (index !== -1) {
            longestSubString.splice(0, index + 1);
        }

        longestSubString.push(s[i]);
        max = Math.max(max, longestSubString.length);
    }

    return max;
};
