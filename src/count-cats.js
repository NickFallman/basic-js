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
// let arrWithCats =
//   [
//     [0, 1, '^^'],
//     [0, '^^', 2],
//     ['^^', 1, 2]
//   ]

function countCats(inArr) {
  let catsSum = 0;
  const catElm = '^^';
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  for(let i = 0; i < inArr.length; i++) {
    for(let j = 0; j < inArr[0].length; j++) {
      if(inArr[i][j] === catElm) catsSum++;
      // console.log(inArr[i][j]);
    }
  }
  return catsSum;
}

// const sum = countCats(arrWithCats);
// console.log(arrWithCats.length, arrWithCats, sum);

module.exports = {
  countCats
};
