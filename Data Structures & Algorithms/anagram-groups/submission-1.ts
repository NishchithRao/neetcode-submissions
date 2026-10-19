class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const obj ={};
        for (const str of strs) {
            const asciiValue = this.getAsciiValue(str);
            if(str=='duh' || str=='ill') {
                console.log(asciiValue, str);
            }
            if(obj[asciiValue]) {
                obj[asciiValue].push(str);
            } else {
                obj[asciiValue] = [str];
            }
        }
        return Object.values(obj);
    }
    getAsciiValue(str:string): string {
        return str.split('').map((_,i) => str.charCodeAt(i)).sort().join('');
    }
}
