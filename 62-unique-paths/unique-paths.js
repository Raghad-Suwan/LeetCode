/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let aboveRow = Array(n).fill(1);

    for (let row = 1 ; row<m ; row ++){

        let currRow =Array( n ).fill(1)
        for (let col =1 ; col <n ; col++){
            currRow[col] = currRow[col -1  ] + aboveRow[col ] ;
        }

        aboveRow=currRow
    }

    return aboveRow[n-1]
    
};