class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        const n = heights.length;
        let left =0, right = n-1,max=0;
        while(left<right) {
            let height = Math.min(heights[left],heights[right]) * Math.abs(right - left);
            max = Math.max(max, height);
            if(heights[left]>heights[right]) {
                right--;
            } else {
                left++;
            }
        }
        return max;
    }
}
