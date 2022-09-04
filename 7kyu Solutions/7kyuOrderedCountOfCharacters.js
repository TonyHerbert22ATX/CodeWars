const orderedCount = function (text) {
    let arr = [];
    let unique = Array.from(new Set(text));
    for (let i = 0; i < unique.length; i++) {
        arr.push([
            unique[i],
            text.split("").filter((x) => x === unique[i]).length,
        ]);
    }
    return arr;
};

console.log(orderedCount("abracadabra"));
