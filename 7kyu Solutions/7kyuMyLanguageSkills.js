function myLanguages(results) {
    let filter = [];
    for (let prop in results) {
        if (results[prop] >= 60) {
            filter.push([prop, results[prop]]);
        }
    }
    let sort = filter.sort((a, z) => z[1] - a[1]);
    let answer = [];
    for (let lang of sort) {
        answer.push(lang[0]);
    }
    return answer;
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }));
console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 }));
