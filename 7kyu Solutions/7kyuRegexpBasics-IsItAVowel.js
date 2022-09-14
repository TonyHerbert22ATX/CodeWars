String.prototype.vowel = function () {
    return this.match(/[aeiou]/gi) && this.length === 1 ? true : false
};

console.log("a".vowel());
console.log("z".vowel());
console.log("ou".vowel());
