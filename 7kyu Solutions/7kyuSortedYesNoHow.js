function isSortedAndHow(array) {
    let copy = array.join("");
    let a = array.sort((a, z) => a - z).join("");
    let d = array.sort((a, z) => z - a).join("");
    if (copy === a) {
        return "yes, ascending";
    } else if (copy === d) {
        return "yes, descending";
    } else {
        return "no";
    }
}

// let arr = [1, 2, 8, 3, 9, 88, 67];
// let newArr = arr.slice(); // creates a copy of the array
// newArr.sort((a, b) => a - b);

console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));
console.log(isSortedAndHow([4, 2, 30]));
