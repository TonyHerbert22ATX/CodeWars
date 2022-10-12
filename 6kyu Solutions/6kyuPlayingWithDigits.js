function digPow(n, p){
  let stringN = String(n).split('').map(x=>+x)
  let result = 0
  for(let i = 0, j = p; i < stringN.length;  i++, j++){
    result += stringN[i] ** j
  }
  return (Math.floor(result/n) === result/n)? result/n : -1
}

console.log(digPow(89,1));
console.log(digPow(92,1));
console.log(digPow(46288,3));