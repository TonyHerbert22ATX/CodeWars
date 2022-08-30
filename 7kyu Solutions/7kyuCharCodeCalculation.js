function calc(x) {
    let total1 = [...x].map((el) => el.charCodeAt(0)).join("");
    let total2 = [...total1.toString()]
        .map((el) => {
            if (el === "7") {
                return "1";
            } else {
                return el;
            }
        })
        .join("");
    return (
        [...total1].reduce((a, c) => a + +c, 0) -
        [...total2].reduce((a, c) => a + +c, 0)
    );
}

// console.log(calc("ABC"));
console.log(calc("abcdef"));
// console.log(calc("fappfav"));
//12
