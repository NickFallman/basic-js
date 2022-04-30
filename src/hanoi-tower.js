const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */

// const disks = 38;
// const speed = 4594;

function calculateHanoi( disksNumber, turnsSpeed ) {
  const secsPerHour = BigInt(3600);
  let outObj = {};

  let turnsQnty = BigInt(2n**BigInt(disksNumber) - 1n);
  let turnsTime = turnsQnty * secsPerHour / BigInt(turnsSpeed);

  turnsQnty = parseInt(turnsQnty.toString(10), 10);
  turnsTime = parseInt(turnsTime.toString(10), 10);
  outObj['turns'] = turnsQnty;
  outObj['seconds'] = turnsTime;
  return (outObj);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// const res = calculateHanoi( disks, speed );
// console.log(res)

module.exports = {
  calculateHanoi
};
