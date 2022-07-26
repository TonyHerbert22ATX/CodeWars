let alphabet = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    10: "k",
    11: "l",
    12: "m",
    13: "n",
    14: "o",
    15: "p",
    16: "q",
    17: "r",
    18: "s",
    19: "t",
    20: "u",
    21: "v",
    22: "w",
    23: "x",
    24: "y",
    25: "z",
};

function solve(arr) {
    let count = Array(arr.length).fill(0);
    let arr2 = arr.forEach((x, i) => {
        for (let j = 0; j < x.length; j++) {
            if (x[j].toLowerCase() === alphabet[j]) {
                count[i] += 1;
            }
        }
    });
    return count;
}

console.log(solve(["abode", "ABc", "xyzD"]));
console.log(solve(["encode", "abc", "xyzD", "ABmD"]));
