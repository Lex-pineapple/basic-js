const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  // throw new NotImplementedError('Not implemented');
  let result = 0;
  function recNum(val) {
    result = 0;
    val = val.toString();
    for (let i = 0; i < val.length; i++) {
      result += parseInt(val[i]);
    }
    if (result.toString().length > 1) {
      recNum(result);
    }
  }
  recNum(num);
  return result;
  
}

module.exports = {
  getSumOfDigits
};
