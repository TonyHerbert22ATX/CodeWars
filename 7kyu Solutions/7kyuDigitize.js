function digitize(n) {
    return String(n).split('').map(s => +s)
}


console.log(digitize(123));