function grow(x){
  return x.reduce((acc,i)=> acc*i,1)
}

console.log(grow([1,2,3]))
console.log(grow([4,1,1,1,4]))
// console.log(max([4,6,2,1,9,63,-134,566]))
// console.log(max([5]))
