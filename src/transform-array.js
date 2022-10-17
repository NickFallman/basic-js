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
function transform( arr ) {
  let outArr = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (!arr.length) return outArr;

  let bufArr = arr.map(elm => elm);
  for (let i = 0; i < bufArr.length; i++) {
    if (!isCommand(bufArr[i])) {
      outArr.push(bufArr[i]);
    } else {
      if (bufArr[i] === '--discard-prev') {
        outArr = discardPrev(outArr, bufArr, i);
      };
      if (bufArr[i] === '--double-prev') {
        outArr = doublePrev(outArr, bufArr, i);
      };
      if (bufArr[i] === '--double-next') {
        outArr = doubleNext(outArr, bufArr, i);
      };
      if (bufArr[i] === '--discard-next') {
        bufArr = discardNext(bufArr, i);
      };
    }
  }
  return outArr;
}

function isCommand(inVal) {
  const commandsSet = new Set(['--discard-prev', '--double-prev', '--double-next', 
    '--discard-next', '--do-nothing']);
  return (commandsSet.has(inVal));
}

function discardPrev(outarr, inarr, inidx) {
  if ((outarr.length > 0) && (!isCommand(inarr[inidx - 1]))) return outarr.slice(0, -1);
  return outarr;
}

function doublePrev(outarr, inarr, inidx) {
  if (outarr.length > 0) {
    if (!isCommand(inarr[inidx - 1])) {
      outarr.push(inarr[inidx - 1]);
    }
  }
  return outarr;
}

function doubleNext(outarr, inarr, inidx) {
  if (inidx + 1 < inarr.length) outarr.push(inarr[inidx + 1]);
  return outarr;
}

function discardNext(inarr, inidx) {
  if ((inidx + 1) < inarr.length && (inarr.length > 2)) inarr.splice(inidx + 1, 1, '--do-nothing');
  return inarr;
}

module.exports = {
  transform
};
