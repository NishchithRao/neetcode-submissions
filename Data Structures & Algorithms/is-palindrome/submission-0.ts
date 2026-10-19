class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left=0,right=s.length-1;
        const str= s.toLowerCase();
        const regex= /^[a-z0-9]$/;
        while(left<right) {
            if(!regex.test(str[left])) {
                left++;
                continue;
            }
            if(!regex.test(str[right])) {
                right--;
                continue;
            }
            if(str[left]!==str[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}
