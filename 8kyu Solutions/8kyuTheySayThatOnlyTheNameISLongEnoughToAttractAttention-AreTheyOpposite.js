function isOpposite(s1, s2) {
    if(s1 === '' && s2 === '') return false
    let op = s1.split('').map((c)=> (c === c.toUpperCase() ? c.toLowerCase(): c.toUpperCase())).join('')
    return (op === s2)?true:false
}


console.log(isOpposite('ab','AB'));
console.log(isOpposite("aB", "Ab"))
console.log(isOpposite("AB", "Ab"));
console.log(isOpposite("", ""));

