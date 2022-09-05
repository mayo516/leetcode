/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    
    if (strs.length == 0) return "";
    
    let p = strs[0];
    
    for (let i=1; i<strs.length ; i++){
        while (strs[i].indexOf(p) != 0 ) {
            p = p.substring(0, p.length - 1)
        }
    }
    return p;
};