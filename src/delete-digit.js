const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {

  function removeChrByIndex (aStr, index) {
    if (index === aStr.length - 1) {
      return aStr.slice(0, aStr.length - 1); 
    } else { 
      return aStr.slice(0, index) + aStr.slice(index + 1); 
    } 
  }

  const inStr = n.toString();
  let arr4Chk = [];
  for (let i = 0; i < inStr.length; i++) {
    arr4Chk.push(parseInt(removeChrByIndex(inStr, i), 10));
  }
  return Math.max.apply(null, arr4Chk);
}

module.exports = {
  deleteDigit
};
