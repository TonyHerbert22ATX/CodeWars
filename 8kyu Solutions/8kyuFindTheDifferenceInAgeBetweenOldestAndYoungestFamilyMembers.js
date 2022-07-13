function differenceInAges(ages) {
    let sort = ages.sort((a, z) => a - z);
    return [sort[0], sort[sort.length - 1], sort[sort.length - 1] - sort[0]];
}

console.log(differenceInAges([82, 15, 6, 38, 35]));
