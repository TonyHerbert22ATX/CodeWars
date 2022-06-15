function countWords(str) {
    return str.split(/\s+/).filter(Boolean).length
}

console.log(countWords("Hello"));
console.log(countWords("Hello World"));
console.log(countWords("No results for search term `s`"));
console.log(countWords("With! Symbol@ #Around! (Every) %Word$"));
console.log(countWords("Dear   Victoria, I love  to press   space button."));
console.log(countWords(""));

console.log(countWords("HelloWorld"));
console.log(countWords("Hello World "));
