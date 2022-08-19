function seven(m) {
    let steps = 0;
    while (m >= 100) {
        let lastDigit = +m.toString().split("").slice(-1);
        let begin = +m.toString().slice(0, `${String(m).length - 1}`);
        m = begin - 2 * lastDigit;
        steps++;
    }
    return [m, steps];
}

console.log(seven(371));
console.log(seven(477557101));
console.log(seven(1603));
