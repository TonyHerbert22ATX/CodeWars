function largestPairSum(numbers) {
    let highest = numbers.sort((a, z) => a - z).slice(-2)
    return highest[0] + highest[1];
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
