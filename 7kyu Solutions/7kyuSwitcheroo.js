function switcheroo(x) {
    let arr = [];
    for (let i = 0; i < x.split("").length; i++) {
        if (x[i] === "a") {
            arr.push("b");
        } else if (x[i] === "b") {
            arr.push("a");
        } else {
            arr.push("c");
        }
    }
    return arr.join("");
}

console.log(switcheroo("abc"));
