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

//تخزين كل حرف وكم مرة بتكرر - key= char  , value = the count of the char
    let present1 ={}
    let present2 = {}

    for (let char of word1 ){
        present1[char] = ( present1[char] || 0 )+1

    }
    for (let char of word2 ){
        present2[char] = ( present2[char] || 0 )+1

    }


//تخزين الاحرف 
    let character1 = Object.keys(present1)
    let character2 = Object.keys(present2)
// التاكد ان طول الاحرف متساوي
    if (character1.length !== character2.length ) return false 
//التاكد من ان الاحرف نفسها ولا يوجد حرف زائد او ناقص 
    for (let char of character1){
        if(!present2[char])
        return false 
    }
//هنا لمقارنة التكرار 
    let freq1 = Object.values(present1).sort( (a,b) => a-b)
    let freq2 = Object.values(present2).sort( (a,b) => a-b)

    for (let i =0 ; i< freq1.length ; i++){
        if (freq1[i] !== freq2[i]) return false 
    }


return true
 
};