function maxTriSum(numbers) {
    return Array.from(new Set(numbers))
        .sort((a, z) => z - a)
        .slice(0, 3)
        .reduce((a, c) => a + c, 0);
}

console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
