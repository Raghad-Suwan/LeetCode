/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    if (nums.length === 1) {
        return true;
    }

//هي قيمة الانديكس اللي بنط عليه
    let max = nums[0];

    for ( let i =0 ; i< nums.length ; i++ ){

        if ( i>=max && nums[i] == 0 ) {
            return false
        } 

        if ( i + nums[i] > max ) {
            max =( nums[i] +i);
        }

        if ( max >=  nums.length-1 ){
            return true 
        }
    }
     return false 

};

// using dp 
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function(nums) {
//     const n = nums.length;
//     const dp = Array(n).fill(false);
//     dp[0] = true;

//     for (let i = 0; i < n; i++) {
//         if (dp[i]) {
//             const maxJump = Math.min(i + nums[i], n - 1);
//             for (let j = i + 1; j <= maxJump; j++) {
//                 dp[j] = true;
//             }
//         }
//     }

//     return dp[n - 1];
// };
