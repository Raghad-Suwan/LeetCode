/**
 * @param {string} s
 * @return {number}
 */

 function romanValue(roman){
  if (roman === 'I') return 1;
  if (roman === 'V') return 5;
  if (roman === 'X') return 10;
  if (roman === 'L') return 50;
  if (roman === 'C') return 100;
  if (roman === 'D') return 500;
  if (roman === 'M') return 1000;
  return -1;
 }
var romanToInt = function(s) {
    let result =0;

    for ( let i=0 ; i< s.length ; i++){

        let num1=romanValue(s[i]);
        if (i + 1 < s.length){
            let num2 = romanValue(s[i + 1]);
            if (num1 >= num2) {
                result += num1;
                } else {
                    result += (num2 - num1);
                    i++;
                    }

        } else {
            result += num1;
            }       
    }
      return result;

};
