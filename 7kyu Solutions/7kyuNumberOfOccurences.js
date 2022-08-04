var arr = [4, 0, 4];

Array.prototype.numberOfOccurrences = function (num) {
    return this.filter((x) => x === num).length;
};

console.log(arr.numberOfOccurrences(0));
console.log(arr.numberOfOccurrences(4));
console.log(arr.numberOfOccurrences(1));
