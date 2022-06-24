function deHead(arr, howMany) {
    if(howMany > arr.length) return []
    if (howMany <= 0) {
        return arr;
    } else if (howMany <= 1) {
        arr.shift();
    } else if (howMany <= 2) {
        arr.shift();
        arr.shift();
    } else if (howMany <= 3) {
        arr.shift();
        arr.shift();
        arr.shift();
    } else if (howMany <= 4) {
        arr.shift(0);
        arr.shift();
        arr.shift();
        arr.shift();
    } else if (howMany <= 5) {
        arr.shift(0);
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
    } else if (howMany <= 6) {
        arr.shift(0);
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
    } else if (howMany <= 7) {
        arr.shift(0);
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
    } else if (howMany <= 8) {
        arr.shift(0);
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
    } else if (howMany <= 9) {
        arr.shift(0);
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
    }
    return arr;
}

console.log(deHead([1, 2, 3], 2));
