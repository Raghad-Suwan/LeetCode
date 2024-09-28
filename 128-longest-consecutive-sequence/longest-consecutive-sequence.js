/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let result =0 ; 

    for (let num of numSet){

        if (!numSet.has(num - 1)) {
            let currNum = num;
            let count =1 ;
        
        while (numSet.has(currNum + 1)) {
            currNum++;
            count++;
        }
        if( result < count){
            result = count 
        }
        }
    }
    return result;
    
};