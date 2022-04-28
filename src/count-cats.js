const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(inArr) {
  let catsSum = 0;
  const catElm = '^^';
  for(let i = 0; i < inArr.length; i++) {
    for(let j = 0; j < inArr[0].length; j++) {
      if(inArr[i][j] === catElm) catsSum++;
    }
  }
  return catsSum;
}

module.exports = {
  countCats
};
