const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

// const inArr = ["file", "file", "image", "file(1)", "file"];
// ["file", "file(1)", "image", "file(1)(1)", "file(2)"]

function renameFiles( names ) {
  // console.log(names);
  let outArr = [];
  if(names.length === 0) return outArr;

  let name4Chk = names[0];

  function addSuffix ( inStr ) {
    // console.log(`${inStr}(1)`);
    return (`${inStr}(1)`);
  }

  function incSuffix ( inStr ) {
    let sfxStart = inStr.lastIndexOf('(');
    let curIdx = +(inStr.slice(sfxStart + 1, -1));
    curIdx++;
    // console.log(curIdx);
    return (`${inStr.slice(0, sfxStart)}(${curIdx})`);
  }

  outArr.push(name4Chk);
  for (let i = 1; i < names.length; i++) {
    if (outArr.includes(names[i])) {
      // add suffix
      name4Chk = addSuffix(names[i]);
      while (outArr.includes(name4Chk)) {
        name4Chk = incSuffix(name4Chk);
      }
      outArr.push(name4Chk);
    } else {
      // console.log(names[i]);
      outArr.push(names[i])
    }
  }

  return(outArr);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// const res = renameFiles( inArr );
// console.log(res);

module.exports = {
  renameFiles
};
