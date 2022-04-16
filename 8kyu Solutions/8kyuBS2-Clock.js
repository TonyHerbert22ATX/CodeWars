function past(h, m, s){
  let afterS = 0
  let afterM = 0
  let afterH = 0
  if(s <= 59){
    afterS += s * 1000
  }
  if(m <= 59){
    afterM = m * 60000 
  }
  if(h <= 23){
    afterH = h * 3.6e+6
  }
  return afterS + afterM + afterH
}


console.log(past(0,1,1))
console.log(past(1,1,1))
console.log(past(1,0,1))
console.log(past(1,0,0))

