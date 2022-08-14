function findOdd(A) {
    let obj = {};
    let count = Array.from(new Set(A));
    for (let key of count) {
        obj[key] = 0;
    }
    for (let i = 0; i < A.length; i++) {
        obj[A[i]]++;
    }
    for (let prop in obj) {
        if (obj[prop] % 2 === 1) {
            return +prop;
        }
    }
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
console.log(findOdd([7]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
