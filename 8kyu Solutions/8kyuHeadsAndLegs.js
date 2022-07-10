function animals(heads, legs) {
    const cows = legs / 2 - heads;
    const chickens = heads - cows;

    if (chickens >= 0 && chickens % 1 === 0 && cows >= 0) {
        return [chickens, cows];
    }
    return "No solutions";
}

console.log(animals(12, 24));
console.log(animals(6, 24));
console.log(animals(72, 200));
