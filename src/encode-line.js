const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  if (str.length === 0) return str;

  let outStr = '';
  let prevChar = str[0];
  let charCounter = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === prevChar) {
      charCounter++;
    } else {
      if (charCounter > 1) { 
        outStr += `${charCounter}${prevChar}`;
        charCounter = 1;
      }
      else { 
        outStr += `${prevChar}`;
      }
      prevChar = str[i];
    }
  }
  return outStr;
}

module.exports = {
  encodeLine
};
