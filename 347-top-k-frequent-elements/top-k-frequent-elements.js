/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let frequencyMap = new Map()
    let result =[]
    let bucket = []

    for (let i=0 ;i<nums.length ; i++){
        if (frequencyMap.has(nums[i])){
            frequencyMap.set( nums[i] , frequencyMap.get( nums[i] ) +1 )

        }else {
            frequencyMap.set( nums[i], 1 )
        }

    }

    //group elements into the bucket based on their frequency

    for (let [num , freq ] of frequencyMap ){

        bucket[freq] = (bucket[freq] || new Set()).add(num);

    }
            // For each element and its frequency, add the element to the correct index in the bucket
        // If the bucket at that frequency index is empty, create a new Set and add the element



// collect elements from the bucket, starting from the highest frequency
    for ( let i = bucket.length-1 ; i>=0 ; i--){
    // start from the end of the bucket (highest frequency)

        if(bucket[i]) result.push(...bucket[i])
        if(result.length === k) break; 

    }
    return result; 

};