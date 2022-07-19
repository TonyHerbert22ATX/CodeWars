function isIsogram(str) {
    let l = str.toLowerCase().split("").sort();
    for (let i = 0; i < l.length; i++) {
        if (l[i] === l[i + 1]) return false;
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("abA"));
