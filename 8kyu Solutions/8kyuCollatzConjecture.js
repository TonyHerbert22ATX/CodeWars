let hotpo = (n) => {
    if (n <= 1) return 0;
    let turns = 0;
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        turns++;
    }
    return turns;
};

console.log(hotpo(1));
console.log(hotpo(5));
console.log(hotpo(6));
console.log(hotpo(23));
