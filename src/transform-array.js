// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ('\'arr\' parameter must be an instance of the Array!');
  }
  let trArr = Array.from(arr);
  for (let i = 0; i < trArr.length; i++) {
    if (trArr[i] == '--discard-next') {
      if (trArr[i+2] == '--discard-prev' || trArr[i+2] == '--double-prev') {
        trArr.splice(i, 3);
      } else if (i == trArr.length-1) {
        trArr.splice(i, 1);
      } else {
        trArr.splice(i, 2);
      }
    } else if (trArr[i] == '--discard-prev') {
      if (i == 0) {
        trArr.splice(i, 1);  

      } else {
        trArr.splice(i-1, 2);
      }
    } else if (trArr[i] == '--double-next') {
      if (i == trArr.length - 1) {
        trArr.splice(i, 1);
      } else {
        trArr[i] = trArr[i+1];
      }
    } else if (trArr[i] == '--double-prev') {
      if (i == 0) {
        trArr.splice(i, 1);  
      } else {
        trArr[i] = trArr[i-1];
      }
    }
  }
  return trArr;
}

module.exports = {
  transform
};
