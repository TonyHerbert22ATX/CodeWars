function collatz(n) {
    let count = 1;
    while (n != 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n *= 3;
            n += 1;
        }
        count++;
    }
    return count;
}

console.log(collatz(20));
console.log(collatz(15));
