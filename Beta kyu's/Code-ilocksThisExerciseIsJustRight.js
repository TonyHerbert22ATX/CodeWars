function whichOne(arr) {
    return arr
        .join(",")
        .replace(/Just Right/g, "Code-ilocks")
        .split(",");
}

console.log(whichOne(["Too Big", "Too Small", "Just Right"]));
console.log(whichOne(["Just Right", "Just Right", "Just Right"]));
