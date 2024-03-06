/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const lastIndices = {};
    for (let i = 0; i < s.length; i++) {
        lastIndices[s[i]] = i;
    }

    const partitions = [];
    let start = 0, end = 0;

    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndices[s[i]]);
        if (i === end) { 
            partitions.push(end - start + 1);
            start = i + 1;
        }
    }

    return partitions;

};
    
