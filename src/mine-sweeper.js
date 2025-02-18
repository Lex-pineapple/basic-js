// const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [*, -, -],
 *  [-, *, -],
 *  [-, -, -]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(array) {
  let gameArr = JSON.parse(JSON.stringify(array));
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      let count = 0;
      if (array[i-1] != undefined) {
        if (array[i-1][j-1]) count++;
        if (array[i-1][j]) count++;
        if (array[i-1][j+1]) count++;
      }
      if (array[i] != undefined) {
        if (array[i][j-1]) count++;
        // if (array[i][j]) count++;
        if (array[i][j+1]) count++;
      }
      if (array[i+1] != undefined) {
        if (array[i+1][j-1]) count++;
        if (array[i+1][j]) count++;
        if (array[i+1][j+1]) count++;
      }
      gameArr[i][j] = count;
    }
  }
  return gameArr;
}


module.exports = {
  minesweeper
};
