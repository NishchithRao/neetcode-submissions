class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const obj = {};

        for(const num of nums) {
            obj[num] = (obj[num]?? 0)+1;

        }
        const resultArr = Object.keys(obj).sort((a, b) => obj[b] - obj[a]).slice(0, k);
        return resultArr.map(Number);
    }
}
