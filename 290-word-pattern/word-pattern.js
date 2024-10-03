/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    pattern = pattern.split('');
    s = s.split(' ');
    
    if (pattern.length !== s.length) return false;

    let map = new Map();
    let i = 0;

    for (let letter of pattern) {
        if (map.has(letter)) {
            if (map.get(letter) !== s[i]) {
                return false;
            }
        } else {
            if ([...map.values()].includes(s[i])) {
                return false;
            }
            map.set(letter, s[i]);
        }
        i++;
    }

    return true;
};
