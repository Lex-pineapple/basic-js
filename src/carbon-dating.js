// const { NotImplementedError } = require('../extensions/index.js');

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
  if (typeof sampleActivity != 'string' || sampleActivity == undefined || isNaN(parseInt(sampleActivity))) {
    return false;
  } if (sampleActivity <= 0) {
    return false;
  }
  else {
    let k = Math.log(2)/HALF_LIFE_PERIOD;
    let result = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity)/k));
    return (result < 0) ? false : result;
  }
}

module.exports = {
  dateSample
};
