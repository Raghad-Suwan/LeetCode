/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
    if (numRows === 1) return s;

    let rows = [];
    for (let i = 0; i < numRows; i++) {
        rows[i] = [];
    }
    
    let reverse = false;
    let index = 0;
    let tempStr = ""; 
    
    for (let i = 0; i < s.length; i++) {
        tempStr += s[i];
        rows[index].push(s[i]);
        
        if (reverse) {
            index--;
        } else {
            index++;
        }
        
        if (index === 0 || index === numRows - 1) {
            reverse = !reverse;
        }
    }

    console.log(tempStr);

    let output = [];
    for (let i = 0; i < numRows; i++) {
        output.push(rows[i].join(""));
    }
    
    return output.join("");
};
