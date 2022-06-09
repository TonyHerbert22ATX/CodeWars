function oddOrEven(array) {
    let sum = array.reduce((acc, count) => (acc += count), 0);
    return sum % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0]));
console.log(oddOrEven([1]));
console.log(oddOrEven([]));
console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, -1, -5]));
console.log(oddOrEven([0, 1, 2]));
console.log(oddOrEven([0, 1, 4]));
