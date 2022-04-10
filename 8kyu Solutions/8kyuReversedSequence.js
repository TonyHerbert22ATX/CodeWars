const reverseSeq = n => {
    let arr = []
  for(let i = 1; i <= n; i++){
      arr.push(i)
  }
  return arr.reverse()
};


console.log(reverseSeq(5)) 
console.log(reverseSeq(8))   
console.log(reverseSeq(3))   




