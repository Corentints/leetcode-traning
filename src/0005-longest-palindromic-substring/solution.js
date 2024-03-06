/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
     if (s.length < 1) return "";

    let start = 0, end = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // Return length of the palindrome
    }

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i); // Length of the palindrome for odd case
        const len2 = expandAroundCenter(i, i + 1); // Length of the palindrome for even case
        const len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
    

    
};

