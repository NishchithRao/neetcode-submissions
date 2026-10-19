class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        console.log(strs.reduce((acc,s) => acc+ s.length+'#'+s,''));
        return strs.reduce((acc,s) => acc+ s.length+'#'+s,'');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const strs = [];
        let lastIndex = -1;
        for(let i=0;i<str.length;i++) {
            if(str[i]==='#') {
                const len = parseInt(getNum(str,i-1,lastIndex));
                strs.push(str.slice(i+1,i+len+1));
                i= i+len;
                lastIndex = i;
            }
        }
        return strs;
    }
}

function getNum(str:string,i:number,j) {
    let finalStr='';
    while(!Number.isNaN(parseInt(str[i])) && i>=0 && i>j) {
        finalStr = str[i] + finalStr;
        i = i-1;
    }
    return finalStr;
}
