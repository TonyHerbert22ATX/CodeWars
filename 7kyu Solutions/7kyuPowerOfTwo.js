function isPowerOfTwo(n) {
    let arr = [];
    for (let i = 0; 2 ** i <= n; i++) {
        arr.push(2 ** i);
    }
    return arr.includes(n) ? true : false;
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(1024));
console.log(isPowerOfTwo(4096));
