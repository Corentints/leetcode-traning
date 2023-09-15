function findDifferentBinaryString(nums: string[]): string {
   let output = '';
   
    for(let i = 0; i < nums.length; i ++) {
        output += nums[i][i] === '0' ? '1' : '0';
    }

    return output;
};