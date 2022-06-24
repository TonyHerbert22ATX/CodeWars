function stripWords(text) {
    return text.replace(/fight club/gi, 'Knitting Club')
}


console.log(stripWords('I love Fight Club'));
console.log(stripWords("I had 3 fights at Fight Club"));