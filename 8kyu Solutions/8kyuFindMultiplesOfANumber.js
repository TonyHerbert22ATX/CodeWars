function findMultiples(integer, limit) {
  let arr = []
  for(let i = 1; i * integer  <= limit; i++){
    arr.push(i*integer)
  }
  return arr
}

console.log(findMultiples(5, 25));
console.log(findMultiples(1, 2));
console.log(findMultiples(5, 7));
