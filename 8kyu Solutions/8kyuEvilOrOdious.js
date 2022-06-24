function evil(n) {
    let binary = n.toString(2);
    let arr = binary.split("0").join("");
    return arr.length % 2 === 0 ? "It's Evil!" : "It's Odious!";
}

console.log(evil(1));
console.log(evil(2));
console.log(evil(3));
console.log(evil(16));
console.log(evil(18));
