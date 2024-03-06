const getCountOfValue = (array, value) => {
    return array.filter(a => a === value).length;
}

const getElementsNotInArray = (arr1, arr2) => {
    return arr1.filter(item => !arr2.includes(item))
}

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const result = [];
    arr2.forEach(item => {
        const itemCountInArr1 = getCountOfValue(arr1, item);
        
        for (let i = 0; i < itemCountInArr1; i++) {
            result.push(item)
        }
    })
    
    return result.concat(getElementsNotInArray(arr1, arr2).sort((a, b) => a - b))
};

