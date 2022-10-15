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
 function getMatrixElementsSum( matrix ) {
  let sum = 0;
  // console.log(matrix);
  const rowsNum = matrix.length;
  const colsNum = matrix[0].length;
  // console.log(rowsNum, colsNum);
  for (let i = 0; i < rowsNum; i++) {
    for (let j = 0; j < colsNum; j++) {
      if (i === 0) sum += matrix[i][j];
      if ((i > 0) && (matrix[i - 1][j] !== 0)) sum += matrix[i][j];
      // console.log('row =', i, matrix[i][j], sum);
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
