const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  // throw new NotImplementedError('Not implemented');
  let count = 0;
  const obj = str2.split("");
  for(ind of str1){
    let i = obj.findIndex(s => s === ind);
    if(i >= 0){
      count++;
      obj.splice(i, 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
