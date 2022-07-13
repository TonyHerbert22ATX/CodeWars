function removeSmallest(numbers) {
    let low = [...numbers].sort((a, z) => a - z)[0];
    let f = numbers.findIndex((x) => x === low);
    let a = numbers.slice(f + 1);
    let b = numbers.slice(0, f);
    return b.concat(a)
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
// console.log(removeSmallest([5, 3, 2, 10, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
// console.log(removeSmallest([]));
