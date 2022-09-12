function alternateCase(s) {
    let newS = "";
    for (let letter of s) {
        if (letter === letter.toUpperCase()) {
            newS += letter.toLowerCase();
        } else {
            newS += letter.toUpperCase();
        }
    }
    return newS;
}

console.log(alternateCase("abc"));
console.log(alternateCase("aBc"));
