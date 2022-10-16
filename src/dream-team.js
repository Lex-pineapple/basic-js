// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!Array.isArray(arr) || arr.length == 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != 'string' || arr[i] == undefined) {
      arr.splice(i, 1);
      i--;
    } else {
      arr[i] = arr[i].replace(/\s+/g, '').toUpperCase();
    }
  }
  arr.sort();
  let retStr = '';
  for (let i = 0; i < arr.length; i++) {
    retStr += arr[i][0];
  }
  return retStr;
}

module.exports = {
  createDreamTeam
};
