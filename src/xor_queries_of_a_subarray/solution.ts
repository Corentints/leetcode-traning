function xorQueries(arr: number[], queries: number[][]): number[] {
    const result: number[] = [];

    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i] ^ arr[i - 1];
    }

    for (let i = 0; i < queries.length; i++) {
        const [x, y] = queries[i];
        if (x > 0) {
            result.push(arr[x - 1] ^ arr[y]);
        } else {
            result.push(arr[y]);
        }
    }

    return result;
}
