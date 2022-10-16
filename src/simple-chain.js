const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink( value ) {
    if(value === null) value = 'null';
    if(value === NaN) value = 'NaN';
    if(value === false) value = 'false';
    if(value === Infinity) value = 'Infinity';
    if((typeof value) === 'object') value = '[object Object]';

    value = String(value);
    if(value) {
      this.chainArr.push(`( ${value} )`);
    } else {
      this.chainArr.push('( )');
    }
    return this;
  },
  removeLink( position ) {
    if(isNaN(position) || !Number.isInteger(position) ||
      position < 1 || position > (this.getLength())) {
        this.chainArr = [];
        throw new Error("You can't remove incorrect link!");
    };
    this.chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    console.log(this);
    const outStr = this.chainArr.join(`~~`);
    this.chainArr = [];
    return outStr;
  }
};

module.exports = {
  chainMaker
};
