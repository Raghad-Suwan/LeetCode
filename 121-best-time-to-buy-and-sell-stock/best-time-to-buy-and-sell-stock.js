/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    minToBuy = prices[0];
    maxTosell = 0;

    for ( i=1 ; i < prices.length ; i++){
        if ( prices[i] < minToBuy){
            minToBuy=prices[i];
        }else if (prices[i]-minToBuy >maxTosell){
            diff = prices[i]-minToBuy;
            maxTosell = diff
        }
    }
    return maxTosell
};