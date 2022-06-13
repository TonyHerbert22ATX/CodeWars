function isDivisible(wallLength, pixelSize) {
    return (wallLength % pixelSize === 0)
}

console.log(isDivisible(4050, 27));
console.log(isDivisible(4066, 27));

