//! THIS WORKS BUT CODEWAR TIMES OUT FOR THE LARGER NUMBERS
//  function mygcd(x, y) {
//     let d = [];
//     for (let i = 1; i <= (x < y ? x : y); i++) {
//         if (x % i === 0 && y % i === 0) {
//             d.unshift(i);
//         }
//     }
//     return d[0];
// }


function mygcd(x, y) {
    let result = 0
    for (let i = 1; i <= (x < y ? x : y); i++) {
        if (x % i === 0 && y % i === 0) {
            result = i
        }
    }
    return result
}

console.log(mygcd(30, 12));
console.log(mygcd(8, 9));
console.log(mygcd(1, 1));
