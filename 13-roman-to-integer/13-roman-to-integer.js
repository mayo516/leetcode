/**
 * @param {string} s
 * @return {number}
 */

const romanNum = {
    I : 1,
    V : 5,
    X :10,
    L : 50,
    C:  100,
    D  :  500,
    M   : 1000
}

var romanToInt = function(s) {
    let sum = 0
    let i =0
    while( i <s.length ) {
        const beforeNum  = romanNum[s[i]];
        const afterNum  = romanNum[s[i+1]]
        
        if (beforeNum < afterNum ) {
            sum = sum + (afterNum-beforeNum);
            i = i + 2
        }
        else {
            sum = sum + beforeNum
            i++
        }
    } return sum
    
};