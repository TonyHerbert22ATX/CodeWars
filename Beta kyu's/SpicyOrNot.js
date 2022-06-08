function whichKind(name, type) {
    if (!type && !name) {
        return { name: "friend of a friend", type: "non-spicy" };
    }
    if (type && name) {
        return { name: name, type: type };
    }

    if (name === "spicy" || type === "spicy") {
        return { name: `friend of a friend`, type: "spicy" };
    }
    if (name === "non-spicy" || type === "non-spicy") {
        return { name: `friend of a friend`, type: "non-spicy" };
    }
    if (name) {
        return { name: name, type: "non-spicy" };
    }
}

console.log(whichKind("spicy"));
console.log(whichKind("non-spicy"));
console.log(whichKind("Tony", "spicy"));
console.log(whichKind("Bella"));
console.log(whichKind("Bella", "non-spicy"));
console.log(whichKind(""));
