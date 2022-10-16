const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
// function sortByHeight(/* arr */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
function sortByHeight( arr ) {
  let buffArr = arr.filter(elm => elm > 0);
  let buffIdx = 0;
  // console.log(buffArr);
  // buffArr.sort(compareFn);
  buffArr.sort((a, b) => a - b);
  console.log(buffArr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      arr.splice(i, 1, buffArr[buffIdx]);
      buffIdx++;
      console.log(arr);
    };
  }
  // splice(start, deleteCount, item1);
  return arr;
};

module.exports = {
  sortByHeight
};
