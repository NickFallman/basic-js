const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  if (!Array.isArray(members)) return false;
  let bufArr = [];
  let bufArrSorted = [];
  let bufStr = '';

  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') bufArr.push(members[i]);
  }

  if (bufArr.length > 0) {
    for (let i = 0; i < bufArr.length; i++) {
      bufStr = bufArr[i].trim().toUpperCase();
      bufArrSorted.push(bufStr);
    }
    bufArrSorted.sort();

    bufStr = '';
    for (let i = 0; i < bufArrSorted.length; i++) {
      bufStr += bufArrSorted[i][0];
    }
    return bufStr;
  }
  else return false;
}

// const res = createDreamTeam(inArr);
// console.log(res);

module.exports = {
  createDreamTeam
};
