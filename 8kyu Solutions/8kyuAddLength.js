function addLength(str) {
    return str.split(" ").map((x, i) => `${x} ${x.length}`);
}

console.log(addLength("apple ban"));
console.log(addLength("you will win"));
