
function fakeBin(x){
  let strArray = x.split('')
  let bin = []
  strArray.map(x => {
    if(x < 5){
      bin.push(0)
    }else if(x >= 5){
      bin.push(1)
    }
  })
  return bin.join('')
}


console.log(fakeBin('45385593107843568'))
console.log(fakeBin('509321967506747'))
// console.log(fakeBin())



