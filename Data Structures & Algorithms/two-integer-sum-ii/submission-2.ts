class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const obj ={};
        for(let i=0;i<numbers.length;i++) {
            const num = numbers[i];
            if(numbers[obj[num]]!==undefined) return [obj[num]+1,i+1];
            const compliment = target - numbers[i];
            obj[compliment] = i;
        }
        return [];
    }
}
