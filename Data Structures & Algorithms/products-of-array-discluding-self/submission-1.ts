class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefix=1,suffix=1;
        const final = new Array(nums.length);

        for(let i=0;i<nums.length;i++) {
            final[i] = prefix;
            prefix *= nums[i];
        }
        
        for(let i=nums.length-1;i>=0;i--) {
            final[i] *= suffix;
            suffix *= nums[i];
        }
        
        return final;
    }
}
