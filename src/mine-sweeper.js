const { NotImplementedError } = require('../extensions/index.js');

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
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
// function minesweeper(/* matrix */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
function minesweeper( matrix ) {
  let sum = 0;
  const rowsNum = matrix.length;
  const colsNum = matrix[0].length;
  const outArr = [];
  let bufArr = [];

  for (let i = 0; i < rowsNum; i++) {
    for (let j = 0; j < colsNum; j++) {
      m = i - 1; n = j - 1;
      if(isCellExists(m, n, rowsNum, colsNum)) sum += Number(matrix[m][n]);
      m = i - 1; n = j;
      if(isCellExists(m, n, rowsNum, colsNum)) sum += Number(matrix[m][n]);
      m = i - 1; n = j + 1;
      if(isCellExists(m, n, rowsNum, colsNum)) sum += Number(matrix[m][n]);
      m = i; n = j - 1;
      if(isCellExists(m, n, rowsNum, colsNum)) sum += Number(matrix[m][n]);
      m = i; n = j + 1;
      if(isCellExists(m, n, rowsNum, colsNum)) sum += Number(matrix[m][n]);
      m = i + 1; n = j - 1;
      if(isCellExists(m, n, rowsNum, colsNum)) sum += Number(matrix[m][n]);
      m = i + 1; n = j;
      if(isCellExists(m, n, rowsNum, colsNum)) sum += Number(matrix[m][n]);
      m = i + 1; n = j + 1;
      if(isCellExists(m, n, rowsNum, colsNum)) sum += Number(matrix[m][n]);
      bufArr.push(sum);
      sum = 0;
    }
    outArr.push(bufArr);
    bufArr = [];
  }
  return outArr;
}

function isCellExists(curRow, curCol, rowsNum, colsNum) {
  if ((curRow >= 0) && (curRow < rowsNum) && (curCol >= 0) && (curCol < colsNum)) return true;
  else return false;
}

module.exports = {
  minesweeper
};
