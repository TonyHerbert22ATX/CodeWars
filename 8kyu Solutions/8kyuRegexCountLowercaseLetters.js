function lowercaseCount(str) {
    let num = str.match(/[a-z]/g, "")
    return (num)?num.length:0
}

console.log(lowercaseCount("abc"));
console.log(lowercaseCount("abcABC123"));
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
console.log(lowercaseCount(""));
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
