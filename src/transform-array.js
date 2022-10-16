const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// function transform(/* arr */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
function transform( arr ) {
  // console.log(arr);
  let outArr = [];
  if (!Array.isArray(arr)) {
    // console.log('\'arr\' parameter must be an instance of the Array!');
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (!arr.length) return outArr;
  let bufArr = arr.map(elm => elm);
  // let value;
  for (let i = 0; i < bufArr.length; i++) {
    // if (typeof bufArr[i] !== 'string') {
    //   outArr.push(bufArr[i]);
    if (typeof bufArr[i] !== 'string') {
      outArr.push(bufArr[i]);
    } else if (bufArr[i].slice(0, 2) !== '--') {
      // console.log(bufArr[i].slice(0, 2));
      outArr.push(bufArr[i]);
    } else {
      if (bufArr[i] === '--discard-prev') {
        outArr = discardPrev(outArr, bufArr, i);
        // i++;
      };
      if (bufArr[i] === '--double-prev') {
        outArr = doublePrev(outArr, bufArr, i);
        // console.log(outArr);
        // i++;
      };
      if (bufArr[i] === '--double-next') {
        outArr = doubleNext(outArr, bufArr, i);
        // console.log(outArr);
        // i++;
      };
      if (bufArr[i] === '--discard-next') {
        outArr = discardNext(outArr, bufArr, i);
        // outArr = discardNext(outArr, arr, i);
        // console.log(outArr);
        // i++;
        // i += 2;
      };
    }
    // console.log(i, outArr, arr[i]);
  }
  return outArr;
}

function discardPrev(outarr, inarr, inidx) {
  if (outarr.length > 0 && (inarr[inidx - 1] !== '--do-nothing')) return outarr.slice(0, -1);
  return outarr;
}

function doublePrev(outarr, inarr, inidx) {
  if (outarr.length > 0) {
    if ((typeof inarr[inidx - 1] === 'string') && inarr[inidx - 1].slice(0, 2) !== '--') {
      outarr.push(inarr[inidx - 1]);
    } else if (typeof inarr[inidx - 1] !== 'string') outarr.push(inarr[inidx - 1]);
  }
  // if (inidx > 0 && (typeof inarr[inidx - 1] !== 'string')) outarr.push(inarr[inidx - 1]);
  // console.log(outarr);
  return outarr;
}

function doubleNext(outarr, inarr, inidx) {
  if (inidx + 1 < inarr.length) outarr.push(inarr[inidx + 1]);
  // console.log(outarr);
  return outarr;
}

function discardNext(outarr, inarr, inidx) {
  if (inidx + 1 < inarr.length && inarr.length > 2) inarr.splice(inidx + 1, 1, '--do-nothing');
  console.log(inarr);
  // this.chainArr.splice(position - 1, 1);
  // splice(start, deleteCount, item1);
  return outarr;
}

module.exports = {
  transform
};
