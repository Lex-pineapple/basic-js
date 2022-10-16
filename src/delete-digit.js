const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  // throw new NotImplementedError('Not implemented');
  num = num.toString();
  let max = num.replace(num.charAt(0), '');
  for (let i = 0; i < num.length; i++) {
    let temp = num.replace(num.charAt(i), '');
    if (temp > max) {
      max = temp;
    }
  }
  return parseInt(max);
}


module.exports = {
  deleteDigit
};
