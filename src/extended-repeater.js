// const { NotImplementedError } = require('../extensions/index.js');

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
STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS 
 */
function repeater(str, options) {
  let resultStr = '';
  if (options.repeatTimes == undefined) options.repeatTimes = 1;
  if (options.addition != undefined && options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;
  if (options.separator == undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator == undefined) options.additionSeparator = '|';
  for (let i = 0; i < options.repeatTimes; i++) {
    let repStr = '';
    if (options.additionRepeatTimes != undefined) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        repStr += options.addition;
        if (j != (options.additionRepeatTimes - 1) && options.additionSeparator != undefined) {
          repStr += options.additionSeparator;
        }
      }
    }
    resultStr += str + repStr;
    if (i != (options.repeatTimes - 1) && options.separator != undefined) {
      resultStr += options.separator;
    }
  }
  return resultStr;
}


module.exports = {
  repeater
};
