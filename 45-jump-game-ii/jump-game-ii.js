/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    let jumps = 0;
    let left = 0;
    let right = 0;
    let  n = nums.length;

    while ( right < n-1 ){
        let far =0 ; //ابعد نقطة ممكن اوصللها
        for ( let i = left ; i<= right ; i++)
        {
            far = Math.max(far , i+nums[i]);

        }
        left = right +1
        right = far 
        jumps++


    }
    return jumps;
};