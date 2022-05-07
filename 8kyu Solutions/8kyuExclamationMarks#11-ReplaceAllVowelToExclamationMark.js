function replace(s) {
    return s.replace(/a|e|i|o|u/gi, '!')
}


console.log(replace('Hi!'));
console.log(replace("!Hi! Hi!"));
console.log(replace("aeiou"));
console.log(replace("ABCDE"));