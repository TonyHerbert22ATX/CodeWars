function capitalize(s) {
    let str1 = "";
    let str2 = "";
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            str1 += s[i].toUpperCase();
        } else {
            str1 += s[i];
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 1) {
            str2 += s[i].toUpperCase();
        } else {
            str2 += s[i];
        }
    }
    return [str1, str2];
}

console.log(capitalize("abcde"));
