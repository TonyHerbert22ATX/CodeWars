function digitize(n) {
  return n.toString().split('').reverse().map(x => +x)
}

console.log(digitize(348597))
console.log(digitize(35231))
console.log(digitize(0))


