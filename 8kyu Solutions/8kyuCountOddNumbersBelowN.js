//! This is correct but codewar says its out of memory for large numbers
// function oddCount(n) {
//     let arr = [];
//     for (let i = 0; i < n; i++) {
//         if (i % 2 == 1) {
//             arr.push(i);
//         }
//     }
//     return arr.length;
// }

function oddCount(n) {
    return Math.floor(n/2)
}

console.log(oddCount(15));
// console.log(oddCount(15023));
