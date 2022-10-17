const { NotImplementedError } = require('../extensions/index.js');

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

  constructor (cipherDirection) {
    this.cipherDirection = Boolean(cipherDirection === undefined) || Boolean(cipherDirection);
    this.validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(inMsg, passwKey) {
    if(!Boolean(inMsg) || !Boolean(passwKey)) {
      throw new Error('Incorrect arguments!');
    };
    if ((inMsg === null) || (passwKey === null)) {
      throw new Error('Incorrect arguments!');
    };
    if(typeof inMsg !== 'string' || typeof passwKey !== 'string' || 
      inMsg === '' || passwKey === '') {
        throw new Error('Incorrect arguments!');
    };

    let encMsg = '';
    let extdKey = '';
    let msgForEnc = inMsg.toUpperCase();
    const charsForEncCounter = msgForEnc.match(/[A-Z]/g).length;
    if (this.cipherDirection === false) {
      msgForEnc = msgForEnc.split('').reverse().join(''); 
    };
    for (let i = 0; i < charsForEncCounter; i++) {
      extdKey += passwKey[i % passwKey.length];
    }
    extdKey = extdKey.toUpperCase();
    if (this.cipherDirection === false) {
      extdKey = extdKey.split('').reverse().join(''); 
    };

    let msgCharIdx = 0, passCharIdx = 0, passCharCounter = 0;
    for (let i = 0; i < msgForEnc.length; i++) {
      msgCharIdx = this.validChars.indexOf(msgForEnc[i]);
      passCharIdx = this.validChars.indexOf(extdKey[passCharCounter]);
      if (msgCharIdx >= 0) {
        encMsg += this.validChars[(msgCharIdx + passCharIdx) % this.validChars.length];
        passCharCounter = (passCharCounter + 1) % extdKey.length;
      } else {
        encMsg += msgForEnc[i];
      }
    }
    return encMsg; 
  }

  decrypt(inMsg, passwKey) {
    if (!Boolean(inMsg) || !Boolean(passwKey)) {
      throw new Error('Incorrect arguments!');
    };
    if ((inMsg === null) || (passwKey === null)) {
      throw new Error('Incorrect arguments!');
    };
    if (typeof inMsg !== 'string' || typeof passwKey !== 'string' || 
      inMsg === '' || passwKey === '') {
        throw new Error('Incorrect arguments!');
    };

    let decMsg = '';
    let extdKey = '';
    let msgForDec = inMsg.toUpperCase();
    const charsForEncCounter = msgForDec.match(/[A-Z]/g).length;
    if (this.cipherDirection === false) {
      msgForDec = msgForDec.split('').reverse().join(''); 
    };
    for (let i = 0; i < charsForEncCounter; i++) {
      extdKey += passwKey[i % passwKey.length];
    }
    extdKey = extdKey.toUpperCase();
    if (this.cipherDirection === false) {
      extdKey = extdKey.split('').reverse().join(''); 
    };

    let msgCharIdx = 0, passCharIdx = 0, passCharCounter = 0;
    let indexForCheck;
    for (let i = 0; i < msgForDec.length; i++) {
      msgCharIdx = this.validChars.indexOf(msgForDec[i]);
      passCharIdx = this.validChars.indexOf(extdKey[passCharCounter]);
      if (msgCharIdx >= 0) {
        indexForCheck = msgCharIdx - passCharIdx;
        indexForCheck = indexForCheck > 0 ? indexForCheck : indexForCheck + this.validChars.length;
        decMsg += this.validChars[indexForCheck % this.validChars.length];
        passCharCounter = (passCharCounter + 1) % extdKey.length;
      } else {
        decMsg += msgForDec[i];
      }
    }
    return decMsg; 
  }
}

module.exports = {
  VigenereCipheringMachine
};
