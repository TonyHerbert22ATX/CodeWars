function caffeineBuzz(n) {
    if (n % 3 === 0 && n % 4 === 0) {
        return n % 2 !== 0 ? "Coffee" : "CoffeeScript";
    } else if (n % 3 === 0) {
        return n % 2 !== 0 ? "Java" : "JavaScript";
    } else {
        return "mocha_missing!";
    }
}

console.log(caffeineBuzz(1));
console.log(caffeineBuzz(3));
console.log(caffeineBuzz(6));
console.log(caffeineBuzz(12));
