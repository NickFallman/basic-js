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
// function getSumOfDigits(/* n */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
function getSumOfDigits( n ) {
  console.log(n);
  let outNum = 0;
  outNum = String(n).split('').map(elm => Number(elm)).reduce((prev, curr) => prev + curr, outNum);
  // console.log(outNum);
  if (outNum > 9) {
    outNum = getSumOfDigits(outNum);
  }
  return outNum;
}

module.exports = {
  getSumOfDigits
};
