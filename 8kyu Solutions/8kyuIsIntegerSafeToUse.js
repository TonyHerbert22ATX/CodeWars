function SafeInteger(n) {
    return (n.toString(2).length <= 53)
}

console.log(SafeInteger(9007199254740990));
console.log(SafeInteger(9007199254740992));
