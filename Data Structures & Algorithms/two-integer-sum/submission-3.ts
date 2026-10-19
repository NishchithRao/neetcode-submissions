class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const obj = {};
        for(let i=0;i<nums.length;i++) {
            if(obj[nums[i]]!==undefined) return [i,obj[nums[i]]];
            const newTarget = target - nums[i];
            obj[newTarget] = i;
        }
        return [];
    }
}
