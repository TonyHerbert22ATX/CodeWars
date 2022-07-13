function stray(numbers) {
    let arr = numbers.sort();
    let low = arr.shift();
    let high = arr.pop();
    return arr.includes(high) ? low : high;
}

console.log(stray([1, 1, 2]));
