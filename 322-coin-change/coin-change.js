/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //array[i] represents the minimum number of coins required to make up the amount i
    //rray is used to store the minimum number of coins needed to make up every amount from 0 to amount.
    let array = Array(amount+1).fill(Infinity)
    array[0]=0 

    for (let i =1 ; i<=amount +1 ;i++){
        for (let coin of coins ){
            if (i>=coin){
                array[i] = Math.min( array[i] , array[i - coin] +1)
            }
        }
    }

    if(array[amount] == Infinity) return -1

    return array[amount]
    
};