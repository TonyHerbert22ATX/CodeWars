function rowWeights(array) {
    let a = array.filter((e, i) => i % 2 === 0).reduce((a, c) => a + c, 0);
    let b = array.filter((e, i) => i % 2 === 1).reduce((a, c) => a + c, 0);
    return [a, b];
}

console.log(rowWeights([80]));
console.log(rowWeights([100, 50]));
console.log(rowWeights([50, 60, 70, 80]));
