const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

// const emailStr = 'prettyandsimple@example.com';

function getEmailDomain( email ) {
  // let atPos = email.lastIndexOf('@');
  // let outStr = email.slice(atPos + 1);
  // let outStr = email.slice(email.lastIndexOf('@') + 1);

  // return (outStr);
  return (email.slice(email.lastIndexOf('@') + 1));
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// const res = getEmailDomain( emailStr );
// console.log(res);

module.exports = {
  getEmailDomain
};
