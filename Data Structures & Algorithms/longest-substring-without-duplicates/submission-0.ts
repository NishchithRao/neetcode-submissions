class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left =0,right=0, maxLen=0;
        const visited = {};
        while(right<s.length) {
            if(visited[s[right]]!==undefined && visited[s[right]]>=left) {
                left = visited[s[right]]+1;
            }
            visited[s[right]] = right;
            right++;
            maxLen = Math.max(maxLen, right - left);
        }
        return maxLen;
    }
}
