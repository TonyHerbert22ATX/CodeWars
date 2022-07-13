function longest(s1, s2) {
    let longest = (s1 + s2).split('').sort()
    let arr = Array.from(new Set(longest)).join("");
    return arr;
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
