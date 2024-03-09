/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const occurences = new Map();
    const splittedParagraph = paragraph.toLowerCase().replace(/[^\w\s]/g, ' ').split(' ')

    for (let i = 0; i < splittedParagraph.length; i++) {
        const lowerCaseWord = splittedParagraph[i]
        const iterations = occurences.get(lowerCaseWord) ? occurences.get(lowerCaseWord) + 1 : 1
        occurences.set(lowerCaseWord, iterations)
    }
    
    let max = 0;
    let maxWord = ''
    
    occurences.forEach((value, key) => {
        if (!banned.includes(key) && max < value && key !== '') {
            maxWord = key;
            max = value;
        }
    })
    
    return maxWord;
};
