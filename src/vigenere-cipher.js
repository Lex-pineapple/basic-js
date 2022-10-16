// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  type = true;
  constructor(val) {
    if (val === undefined) {
      this.type = true;
    } else {
      this.type = val;
    }
  }
  encrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    } else {
      let output = "";
      for (let i = 0, j = 0; i < string.length; i++) {
        let currChar = string[i];
        if (currChar.charCodeAt() >= 65 && currChar.charCodeAt() <= 90) {
          let upChar = ((currChar.charCodeAt() - 65) + (key[j%key.length].toUpperCase().charCodeAt() - 65)) % 26;
          output += String.fromCharCode(upChar + 65);
          j++;
        } else if (currChar.charCodeAt() >= 97 && currChar.charCodeAt() <= 122) {
          let lowChar = ((currChar.charCodeAt() - 97) + (key[j%key.length].toLowerCase().charCodeAt() - 97)) % 26;
          output += String.fromCharCode(lowChar + 97);
          j++;
        } else {
          output += currChar;
        }
      }
      if (this.type == true) {
        return output.toUpperCase();
      } else {
        return output.split('').reverse().join('').toUpperCase();
      }
    }
  }
  decrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    } else {
      let output = "";
      let newKey = "";
      for (let i = 0; i < key.length; i++) {
        let keyChar = key[i]
        if ((keyChar.charCodeAt() >= 65 && keyChar.charCodeAt() <= 90) || (keyChar.charCodeAt() >= 97 && keyChar.charCodeAt() <= 122)) {
          newKey += String.fromCharCode(((26 - ((keyChar.charCodeAt() - 65) % 32))% 26)+65);
        }
      }
      return this.encrypt(string, newKey);
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
