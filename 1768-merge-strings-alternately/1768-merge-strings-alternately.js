/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = "";
    if (word1.length >= word2.length) {
        for (let i = 0; i < word1.length; i++) {
            result += word1[i];
            if (i < word2.length) {
                result += word2[i];
            }
        }
    } else {
        for (let i = 0; i < word2.length; i++) {
            if (i < word1.length) {
                result += word1[i];
            }
            result += word2[i];
        }
    }
    return result;
};