function monkeyCount(n) {
  let monkey = []
  for(let i = 1; i <= n; i++){
    monkey.push(i)
  }
  return monkey
}

console.log(monkeyCount(5))
console.log(monkeyCount(3))
// console.log(max([4,6,2,1,9,63,-134,566]))
// console.log(max([5]))
