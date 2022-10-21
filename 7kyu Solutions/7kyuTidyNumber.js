// number ... ABP.. integer.. 

// true || false


function tidyNumber(num){
  let numString = num.toString()
    for(let i = 0; i < numString.length; i++){
    if(numString[i] > numString[i+1]){
      return false
    }
  }
  return true
}


console.log(tidyNumber(12), 'true')
console.log(tidyNumber(102), 'false')
console.log(tidyNumber(9672), 'false')
console.log(tidyNumber(2789), 'true')
console.log(tidyNumber(2335), 'true')