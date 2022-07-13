
var isAnagram = function (test, original) {
    let arr = []
    if (test.length != original.length) return false;
    let a = original.toLowerCase().split("").sort().join("");
    let b = test.toLowerCase().split("").sort().join("");
    for (let i = 0; i < original.length; i++) {
        if (a[i] === b[i]) {
            arr.push(true);
        } else {
            arr.push(false);
        }
    }
    return !arr.includes(false)
};

console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("Buckethead", "DeathCubeK"));
console.log(isAnagram("ANDYOU", "uoydad"));

console.log(isAnagram("dumble", "bumble"));
console.log(isAnagram("ound", "round"));
console.log(isAnagram("ound", "rnd"));

console.log(isAnagram("cmrgovpnaotgvcvnbm", "tctrvbmmngacvoogpv"));
