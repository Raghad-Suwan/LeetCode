/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if (nums.length === 0) return 0;

    let set = new Set (nums);
    let res=0;

    for ( let number of set  ){

        if ( !set.has(number -1)){
            let currentNum =number;
            let result =1 ;
        

        while ( set.has(currentNum +1) ){
            currentNum++;
            result ++;
        }
        if (res< result){
            res=result
        }
        }
    }
    return res
    
};