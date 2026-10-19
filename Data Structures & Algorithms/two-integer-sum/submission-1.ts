class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const obj = {};
        for(let i=0;i<nums.length;i++) {
            const num = nums[i];
            const newNum = target-num;
            if(newNum in obj) {
                return [obj[newNum], i];
            }
            obj[num] = i;
        }
        return [];
    }
}
