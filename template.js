//? THIS WAS CORRECT>>>>> NOT SURE WHY CODEWARS DOES NOT ACCEPT IT
// function nextItem(xs, item) {
//     if (typeof xs != "object") {
//         let a = xs.split("").findIndex((x) => x === item);
//         console.log(a);
//         return a === -1 ? undefined : xs[a + 1];
//     } else {
//         let b = xs.findIndex((x) => x === item);
//         console.log(b);
//         return b === -1 ? undefined : xs[b + 1];
//     }
// }

function nextItem(test, item) {
    let found = false;
    for (let x of test) {
        if (found) return x;
        if (x == item) found = true;
    }
    return undefined;
}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5));
console.log(nextItem(["a", "b", "c"], "t"));
console.log(nextItem(["a", "b", "c"], "c"));
console.log(nextItem("testing", "t"));
