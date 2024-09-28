/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }
    
    if (word1 == word2) return true
    //لتخزين عدد مرات ظهور كل حرف
    const count1 = {};
    const count2 = {};
    //عدد الأحرف في الكلمة 1
    for (let char of word1) {
        count1[char] = (count1[char] || 0) + 1;
    }
    // عدد الأحرف في الكلمة 2
    for (let char of word2) {
        count2[char] = (count2[char] || 0) + 1;
    }
    // حطيناهم بset عشان المقارنة 
    const chars1 = Object.keys(count1);
    const chars2 = Object.keys(count2);
    //مقارنة مجموعة الاحرف
    if (chars1.length !== chars2.length) {
        return false;
    }
    //إذا كان هناك أي حرف مفقود في word2
    for (let char of chars1) {
        if (!count2[char]) {
            return false; 
        }
    }
    //مقارنة التكرار
    const freq1 = Object.values(count1).sort((a, b) => a - b);
    const freq2 = Object.values(count2).sort((a, b) => a - b);

    for (let i = 0; i < freq1.length; i++) {
        if (freq1[i] !== freq2[i]) return false; 
    }

    return true;
    
};