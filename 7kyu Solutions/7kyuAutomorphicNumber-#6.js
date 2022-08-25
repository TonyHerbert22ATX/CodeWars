function automorphic(n) {
    let sq = +String(n * n)
        .split("")
        .slice(-String(n).length)
        .join("");
    return n === sq ? "Automorphic" : "Not!!";
}

console.log(automorphic(1));
console.log(automorphic(3));
console.log(automorphic(6));
console.log(automorphic(9));
console.log(automorphic(25));
