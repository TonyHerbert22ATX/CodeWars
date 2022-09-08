function incrementer(nums) {
    return nums.map((x, i) => x + i + 1).map((x) => +String(x).slice(-1));
}

console.log(incrementer([1, 2, 3]));
console.log(incrementer([4, 6, 9, 1, 3]));
