var firstName = { A: "Alpha", B: "Beta", C: "Cache" };
var surname = { A: "Analogue", B: "Bomb", C: "Catalyst" };

function aliasGen(first, last) {
    let alias = [];
    for (let property in firstName) {
        if (property === first[0].toUpperCase()) {
            alias.push(firstName[property]);
        }
    }
    for (let property in surname) {
        if (property === last[0].toUpperCase()) {
            alias.push(surname[property]);
        }
    }
    return alias.length > 1
        ? alias.join(" ")
        : "Your name must start with a letter from A - Z.";
}

console.log(aliasGen("Ant", "Anderson"));
console.log(aliasGen("barrt", "Anderson"));
console.log(aliasGen("739324", "anthoh"));
console.log(aliasGen("brb", "739324"));
