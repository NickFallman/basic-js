const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  // formula: N(t)=N(0)*exp(-lam * t), T(1/2) = ln(2) / lam, => N(t)=N(0)*2**(-t/T(1/2)) =>
  // t = -T(1/2)*log2(N(t)/N(0));
  let result = false;
  if((typeof(sampleActivity) !== 'string') || isNaN(sampleActivity)) return result;
  // if(!isFinite(sampleActivity)) return result;
  if((+sampleActivity <= 0) || (+sampleActivity > MODERN_ACTIVITY)) return result;
  result = Math.ceil(HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY/+sampleActivity));
  return result;
}

module.exports = {
  dateSample
};
