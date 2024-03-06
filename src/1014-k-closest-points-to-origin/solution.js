function sortIndicesByValues(arr) {
    // Map the array to [index, value] pairs
    const indexedArray = arr.map((value, index) => [index, value]);
    
    // Sort the array by value. If the values are equal, you can optionally compare the indices for a stable sort.
    indexedArray.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0]; // This line is optional and can be removed if index-based sorting is not needed.
        }
        return a[1] - b[1];
    });

    // Map the sorted pairs to get only the indices
    const sortedIndices = indexedArray.map(([index]) => index);

    return sortedIndices;
}

const euclideanDistance = (x1, x2, y1, y2) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const distances = points.map(point => euclideanDistance(point[0], 0, point[1], 0))
    // 50, 5, 2, 10, 1
    const keys = sortIndicesByValues(distances)
    const result = []
    
    for (let i = 0; i < k; i++) {
        result.push(points[keys[i]])
    }
    return result;
};

