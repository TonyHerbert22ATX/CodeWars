function datingRange(age) {
    let min = 0;
    let max = 0;
    if (age <= 14) {
        min = Math.floor(age - 0.1 * age);
        max = Math.floor(age + 0.1 * age);
        return `${min}-${max}`;
    } else {
        min = Math.floor(age / 2 + 7);
        max = Math.floor((age - 7) * 2);
        return `${min}-${max}`;
    }
}

console.log(datingRange(17));
console.log(datingRange(40));
