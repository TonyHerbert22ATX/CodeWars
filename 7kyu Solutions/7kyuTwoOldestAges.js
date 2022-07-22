// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
    let sort = ages.sort((a, z) => a - z);
    return [sort[sort.length - 2], sort[sort.length - 1]];
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
