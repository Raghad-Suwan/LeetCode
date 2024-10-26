/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    const len = nums.length;
    if (len ==1 ) return nums[0]

    const getMax = (nums)=> {
        let prev = 0 , max =0 ; 

        for (let curr of nums ) {
            let temp = Math.max( max , curr + prev) 
            prev = max 
            max = temp 
        }
        return max

    }

    return Math.max( getMax(nums.slice(0, len-1)) , getMax(nums.slice(1,len)) )


    
};