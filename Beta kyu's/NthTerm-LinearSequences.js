function nthTermOf(sequence) {
    let diffArr = [];
    for (let i = 0; i < sequence.length; i++) {
        diffArr.push(sequence[i + 1] - sequence[i]);
    }
    diffArr.pop();
    let d = diffArr.reduce((acc, count) => (acc += count), 0) / diffArr.length;
    let n = [1, 2, 3, 4, 5].map((x, i) => {
        return x * d;
    });
    let endArr = [];
    for (let j = 0; j < sequence.length; j++) {
        endArr.push(sequence[j] - n[j]);
    }
    let end = endArr.reduce((acc, count) => (acc += count), 0) / endArr.length;
    return `${d}n + ${end}`;
}

console.log(nthTermOf([3, 5, 7, 9, 11]));
console.log(nthTermOf([-6, -11, -16, -21, -26]));
