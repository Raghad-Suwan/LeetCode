/**
 * @param {number[]} candies//عدد الكاندي بحوزة الطفل 
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let n = candies.length;
    let result = new Array(n);

    let maxCandies=candies[0];
    for (let i = 1; i < n; i++){
        if (candies[i]>maxCandies  )
        {
            maxCandies=candies[i];
        }

    }


    for (let i = 0; i < n; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
            result[i] = true;
        } else {
            result[i] = false;
        }
    }


        return result;


};

