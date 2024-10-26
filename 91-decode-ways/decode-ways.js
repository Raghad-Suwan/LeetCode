/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

    let len = s.length 
    let dp = new Array (len +1 ).fill(0);

// one way to decode an empty string
    dp[0]=1

// the first element of dp is 1 if the first char in s is not 0 
    if ( s[0] != '0'){
        dp[1] = 1 
    }else return 0 

    for (let i=2 ; i <= len ; i++){

        //Single Digit Check
        // Check if the single character at `s[i-1]` is a valid encoding

        if (s[i-1] != '0'){
            dp[i] += dp[i-1]
        }


        //Two-Digit Check
        // Check if the two-character substring `s[i-2]s[i-1]` is between 10 and 26
        // If so, it can be decoded as a valid letter
        if (  (s[i-2] == '1') ||  ( s[i-2] =='2'   &&   s[i-1] <=6  ) ){
            dp[i] += dp[i-2];
        }
    }

    return dp [ len ]


    
};