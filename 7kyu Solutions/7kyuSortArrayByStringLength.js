function sortByLength(array) {
    return array.sort((a, z) => a.length - z.length);
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));
