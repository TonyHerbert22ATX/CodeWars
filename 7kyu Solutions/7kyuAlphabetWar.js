let leftSide = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
};
let rightSide = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
};

function alphabetWar(fight) {
    let leftTotal = 0;
    let rightTotal = 0;
    let left = fight
        .split("")
        .filter((x) => x === "w" || x === "p" || x === "b" || x === "s");
    let right = fight
        .split("")
        .filter((x) => x === "m" || x === "q" || x === "d" || x === "z");
    for (let i of right) {
        rightTotal += rightSide[i];
    }
    for (let i of left) {
        leftTotal += leftSide[i];
    }
    return leftTotal > rightTotal
        ? "Left side wins!"
        : rightTotal > leftTotal
        ? "Right side wins!"
        : "Let's fight again!";
}

console.log(alphabetWar("zz"));
console.log(alphabetWar("zdqmwpbs"));
