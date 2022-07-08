function fixTheMeerkat(arr) {
    let tail = arr[0];
    let head = arr[2];
    return [head, arr[1], tail];
}

console.log(fixTheMeerkat(["tail", "body", "head"]));
