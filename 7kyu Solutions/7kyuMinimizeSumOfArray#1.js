function minSum(arr) {
    let sum = 0;
    let sortLow = arr.sort((a, z) => a - z).slice(0, arr.length / 2);
    let sortHigh = arr.sort((a, z) => z - a).slice(0, arr.length / 2);
    for (let i = 0; i < sortLow.length; i++) {
        sum += sortLow[i] * sortHigh[i];
    }
    return sum;
}

console.log(minSum([5, 4, 2, 3]));
console.log(minSum([12, 6, 10, 26, 3, 24]));
