class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a,b) => a-b);
        const res:number[][] = [];
        for(let i=0;i<nums.length;i++) {
            if(nums[i] === nums[i-1]) continue;
            let j= i+1, k = nums.length-1;
            while(j<k) {
                const sum = nums[i] + nums[j] +nums[k];
                if(sum === 0) {
                    res.push([nums[i],nums[j],nums[k]]);
                    j++;
                    k--;
                    while(nums[j]===nums[j-1] && j<k) j++;
                    while(nums[k]===nums[k+1] && j<k) k--;
                }
                if(sum<0) j++;
                if(sum>0) k--;
            }
        }
        return res;
    }
}
