function dontGiveMeFive(start, end) {
    let arr = [];
    let remove = [];
    for (let i = start; i <= end; i++) {
        if (i >= 50 && i < 60) {
            remove.push(i);
        } else if (i % 10 == 0) {
            arr.push(i);
        } else if (i % 5 !== 0) {
            arr.push(i);
        }
    }
    return arr.length;
}

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
console.log(dontGiveMeFive(1, 60));
