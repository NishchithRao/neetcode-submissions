class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length!==t.length) return false;
        const indexObj:Record<string,number> = {};
        for (const character of s.split('')) {
            const nextIndex = character in indexObj ? indexObj[character]+1: 0;
            const charIndex = t.indexOf(character, nextIndex);
            if(charIndex>=0 && charIndex!==indexObj[character]) {
                indexObj[character] = charIndex;
            } else return false;
        }
        return true;
    }
}
