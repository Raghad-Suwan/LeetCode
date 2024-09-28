/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();

    for(let i=0 ; i < strs.length ; i++) {

    let val = strs[i].split("").sort().join("")

    if (map[val]) {
        map[val].push(strs[i]);
    } else {
        map[val] = [strs[i]];
    }

   }
    return Object.values(map)
};