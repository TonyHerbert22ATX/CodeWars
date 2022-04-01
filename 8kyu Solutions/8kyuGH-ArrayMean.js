var findAverage = function (nums) {
    return nums.reduce((acc, count) => acc + count, 0) / nums.length;
};

console.log(findAverage([1]));
console.log(findAverage([1, 3, 5, 7]));
