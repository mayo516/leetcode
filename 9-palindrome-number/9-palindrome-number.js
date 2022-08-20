/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reverseNum = x.toString().split('').reverse().join('');
    return reverseNum == x ? true : false;
};