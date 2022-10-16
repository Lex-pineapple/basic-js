const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
  // throw new NotImplementedError('Not implemented');
  let result = 0;
  for (let i = 0; i < arr[0].length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[k][i] != 0) {
        result += arr[k][i];
      } else break;
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
