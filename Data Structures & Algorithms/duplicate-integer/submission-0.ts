class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const uniq = {};
        for(const num of nums) {
            if(uniq[num]) return true;
            uniq[num]=1;
        }
        return false;
    }
}
