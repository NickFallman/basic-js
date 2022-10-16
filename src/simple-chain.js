const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink( value ) {
    if(value === null) value = 'null';
    if(value === NaN) value = 'NaN';
    if(value === true) value = 'true';
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
    // try {
      if(isNaN(position) || !Number.isInteger(position) ||
        position < 1 || position > (this.getLength())) {
          this.chainArr = [];
          throw new Error("You can't remove incorrect link!");
      };
      this.chainArr.splice(position - 1, 1);
      return this;
    // } catch (err) {
      // this.chainArr = [];
      // return err;
      // console.error(err);
      // throw "You can't remove incorrect link!";
    // }
    // splice(start, deleteCount, item1, item2, itemN);
    // this.chainArr.splice(position - 1, 1);
  },
  reverseChain() {
    this.chainArr.reverse();
    // let buffArr = this.chainArr.reverse();
    // console.log(buffArr);
    return this;
  },
  finishChain() {
    console.log(this);
    const outStr = this.chainArr.join(`~~`);
    this.chainArr = [];
    // console.log(this);
    return outStr;
  }
};

// chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain(); // '( 3rd )~~( function () { } )'

// const chain = chainMaker;
// console.log(chain);
// let res = chain.getLength();
// console.log(res);
// res = chain.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain();
// console.log(res);

module.exports = {
  chainMaker
};
