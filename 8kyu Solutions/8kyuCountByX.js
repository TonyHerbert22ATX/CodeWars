function countBy(x, n) {
  let z = [];
  for(let i = 1; i <= n; i++){
    z.push(x*i)
  }
  return z;
}

console.log(countBy(1,10))
console.log(countBy(2,5))
// console.log(countBy([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))




