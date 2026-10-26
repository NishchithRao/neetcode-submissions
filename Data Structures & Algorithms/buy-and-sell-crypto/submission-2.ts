class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left=0,right=1,profit=0;
        while(right<prices.length) {
            if(prices[left]<prices[right]) {
                profit = Math.max(profit, prices[right] - prices[left]);
            } else {
                left = right;
            }
            right++;
        }
        return profit;
    }
}
