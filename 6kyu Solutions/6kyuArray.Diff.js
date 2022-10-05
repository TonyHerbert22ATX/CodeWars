function arrayDiff(a, b) {
    let result = a
    for(let i = 0; i < b.length; i++){
        result = result.filter((num) => num != b[i]);
    }
    return result
}

console.log(arrayDiff([1, 2],[1]));
console.log(arrayDiff([1, 2,2,2,3], [2]));
console.log(arrayDiff([1, 2, 2, 2, 3], [1,2]));
