function partlist(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push([
            arr.slice(0, i).join(" "),
            arr.slice(i, arr.length).join(" "),
        ]);
    }
    arr2.shift();
    return arr2;
}

console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));
