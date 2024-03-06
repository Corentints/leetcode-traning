/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
    const nextDay = (cells) => {
        return [0, ...cells.slice(1, 7).map((_, i) => cells[i] === cells[i + 2] ? 1 : 0), 0];
    };
    
    let seen = new Map();
    while (n > 0) {
        const c = cells.join('');
        if (seen.has(c)) {
            n %= seen.get(c) - n;
        }
        seen.set(c, n);
        
        if (n >= 1) {
            n -= 1;
            cells = nextDay(cells);
        }
    }
    
    return cells;
};

