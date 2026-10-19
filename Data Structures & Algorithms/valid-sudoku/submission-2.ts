class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const validStr = '123456789.';
        const obj = {};
        for(let row=0;row<board.length;row++) {
            const rowLabel = `row:`+row;
                obj[rowLabel] = [];
            for(let col=0;col<board[row].length;col++) {
                const boxIndex = Math.floor((row)/3) * 3 + Math.floor((col)/3);
                const boxIndexLabel = `box:` + boxIndex;
                const item = board[row][col];
                if(!validStr.includes(item)) {
                    return false;
                }
                if(obj[rowLabel].includes(item)) return false;
                if(item === '.') continue;
                if(obj[rowLabel].includes(item)) {
                    return false;
                }
                if(!obj[`col:`+col]) {
                    obj[`col:`+col] = [];
                }
                if(obj[`col:`+col].includes(item)) {
                    return false;
                } else {
                    obj[`col:`+col].push(item);
                }
                obj[rowLabel].push(item);
                if(!obj[boxIndexLabel]) {
                    obj[boxIndexLabel] = [];
                }
                if(obj[boxIndexLabel].includes(item)) {
                    return false;
                } else {
                    obj[boxIndexLabel].push(item);
                }
            }
        }
        return true;
    }
}
