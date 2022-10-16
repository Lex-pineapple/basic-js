// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  // throw new NotImplementedError('Not implemented');
  if (arr.length == 0) {
    return {};
  }
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].split(".");
    arr[i] = temp.reverse().join(".");
  }
  let split = arr[0].split(".");
  split = split[0];
  arr.unshift(split)
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[j].includes(arr[i])) {
        count++;
      }
    }
    if (i == 0) {
      result["." + arr[i]] = count -1;
    } else {
      result["." + arr[i]] = count;
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
