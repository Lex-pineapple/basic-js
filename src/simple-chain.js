// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  linkConts: [],
  getLength() {
    return this.linkConts.length;
  },
  addLink(val) {
    if (val === undefined) {
      this.linkConts.push('');
    } else {
      this.linkConts.push(val);
    }
    return this;
  },
  removeLink(ind) {
    if (!Number.isInteger(ind) || ind-1 >= this.linkConts.length || ind-1 < 0) {
      this.linkConts = [];
      throw new Error('You can\'t remove incorrect link!');
      // return 'You can\'t remove incorrect link!';
    } else {
      this.linkConts.splice(ind-1,1);
    }
    return this;
  },
  reverseChain() {
    this.linkConts = this.linkConts.reverse();
    return this;
  },
  finishChain() {
    let finalStr = '';
    for (let i = 0; i < this.linkConts.length; i++) {
      if (i == (this.linkConts.length - 1)) {
        finalStr += '( ' + this.linkConts[i] + ' )';
      } else {
        finalStr += '( ' + this.linkConts[i] + ' )~~';
      }
    }
    this.linkConts = [];
    return finalStr;
  }
};

module.exports = {
  chainMaker
};
