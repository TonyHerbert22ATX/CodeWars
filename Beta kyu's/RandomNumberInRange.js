function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInRange(0, 1));
console.log(getRandomInRange(1, 6));

