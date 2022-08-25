function maxRot(n) {
    let arr = ("" + n).split("");
    let largestNumber = n;
    for (let i = 0; i < arr.length - 1; i++) {
        arr.push(arr.splice(i, 1)[0]);

        let newNum = Number(arr.join(""));
        if (newNum >= largestNumber) {
            largestNumber = newNum;
        }
    }
    return largestNumber;
}


console.log(maxRot(56789));
