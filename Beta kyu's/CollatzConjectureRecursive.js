function collatzCount(n, steps = 0) {
    if (n == 1) return steps;
    if (n % 2 == 0) {
        n /= 2;
        steps += 1;
    } else {
        n = n * 3 + 1;
        steps += 1;
    }
    return n == 1 ? steps : collatzCount(n, steps);
}

console.log(collatzCount(1));
console.log(collatzCount(2));
console.log(collatzCount(3));
