function minValue(values) {
    return +(Array.from(new Set(values)).sort((a, z) => a - z, 0).join(''))
}

console.log(minValue([1, 3, 1]));
console.log(minValue([4, 7, 5, 7]));
console.log(minValue([5, 6, 4]));
