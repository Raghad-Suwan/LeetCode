/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' '); 
    if (words.length !== pattern.length) return false; 
    
    const wordToCharMap = new Map(); 
    const charToWordMap = new Map(); 
    
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];
        if (charToWordMap.has(char) && charToWordMap.get(char) !== word) {
            return false;
        }
        if (wordToCharMap.has(word) && wordToCharMap.get(word) !== char) {
            return false;
        }
        charToWordMap.set(char, word);
        wordToCharMap.set(word, char);
    }
    return true; 
};