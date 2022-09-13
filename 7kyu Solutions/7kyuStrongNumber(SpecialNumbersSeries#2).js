function strong(n) {
    let arr = String(n)
        .split("")
        .map((x) => {
            let a = [];
            for (let i = +x - 1; i > 0; i--) {
                a.push(i);
            }
            return a.reduce((a, c) => a * c, +x);
        });
    if(arr.includes(0)){
        arr.push(1)
    }
    return n === arr.reduce((a, c) => a + c, 0)
        ? "STRONG!!!!"
        : "Not Strong !!";
}

console.log(strong(4));
console.log(strong(0));
console.log(strong(5));
console.log(strong(8));
console.log(strong(5));
// console.log(strong(123));
// console.log(strong(145));
// console.log(strong(150));
console.log(strong(40585));
