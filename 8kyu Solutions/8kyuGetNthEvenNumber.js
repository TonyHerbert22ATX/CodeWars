// ? This was my first attempt.. Then I realized the math is pretty simple 
// function nthEven(n) {
//     let arr = [];
//     for (let i = 0; i < n * 2; i++) {
//         arr.push(i);
//     }
//     return arr.filter((x) => x % 2 === 0).pop();
// }

function nthEven(n) {
    let a = n * 2 -2
    return a
}

console.log(nthEven(1));
console.log(nthEven(2));
console.log(nthEven(3));
console.log(nthEven(4));
console.log(nthEven(100));
