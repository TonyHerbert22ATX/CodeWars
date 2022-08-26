function hasUniqueChars(str) {
    let arr = [];
    let answer = true
    for (let i = 0; i < str.length; i++) {
        arr.push(str.charCodeAt(i));
    }
    arr = arr.sort((a, z) => a - z);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            answer = false
            break;
        }
    }
    return answer
}

console.log(hasUniqueChars("  nAa"));
console.log(hasUniqueChars("abcdef"));
console.log(hasUniqueChars("abcdea"));
console.log(hasUniqueChars("Jn-7t/.)g<#V6Q2T;SwApdO$"));
