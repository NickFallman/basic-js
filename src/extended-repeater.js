const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {

  function createStr(inStr, strCounter, strSeparator) {
    let bufStr = '';
    let bufArr = [];
    let bufArr2 = [];

    bufArr = inStr.split('');
    bufArr.push(...strSeparator);
    for (let i = 0; i < strCounter; i++) {
      bufArr2.push(...bufArr);
    }
    for (let i = 0; i < strSeparator.length; i++) {
      bufArr2.pop();
    }
    bufStr = bufArr2.join('');

    return (bufStr);
  }
  
  let outStr = '';
  let strCntr = 1;
  let strSep = '+';

  if(options.hasOwnProperty('repeatTimes')) { strCntr = options.repeatTimes };
  if(options.hasOwnProperty('separator')) { strSep = options.separator }

  let addStr = '';
  let addStrCntr = 1;
  let addStrSep = '|';
  let typeStr = '';

  if(options.hasOwnProperty('addition')) {
    typeStr = typeof(options.addition);  
    if ((typeStr === 'object') || (typeStr === 'boolean')) {
      addStr = String(options.addition);
    } else {
      addStr = options.addition; 
    }
  };
  if(options.hasOwnProperty('additionRepeatTimes')) { addStrCntr = options.additionRepeatTimes };
  if(options.hasOwnProperty('additionSeparator')) { addStrSep = options.additionSeparator };

  if ((typeof(str) === 'object') || (typeof(str) === 'boolean')) {
    outStr = String(str);
  } else {
    outStr = str; 
  }

  outStr += createStr(addStr, addStrCntr, addStrSep);
  outStr = createStr(outStr, strCntr, strSep);

  return outStr;
}

module.exports = {
  repeater
};
