function reverseLetter(str) {
    return str.replace(/[^a-z]/gi, '').split('').reverse().join('')
}


console.log(reverseLetter('krishan'));
console.log(reverseLetter("kr?ishan"));
console.log(reverseLetter("kri98shan"));
console.log(reverseLetter("ruhzizwezwsicfbdupq_v_ierzxiclr"));