function describeAge(age) {
    return "You're a(n) " + (age <= 12
        ? `kid`
        : age <= 17
        ? `teenager`
        : age <= 64
        ? `adult`
        : `elderly`)
}

console.log(describeAge(9));
console.log(describeAge(13));
console.log(describeAge(18));
console.log(describeAge(99));
