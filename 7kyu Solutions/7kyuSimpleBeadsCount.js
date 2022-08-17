function countRedBeads(n) {
    if(n <= 1) return 0
    return (n - 1) * 2
}


console.log(countRedBeads(0));
console.log(countRedBeads(1));
console.log(countRedBeads(3));
console.log(countRedBeads(5));