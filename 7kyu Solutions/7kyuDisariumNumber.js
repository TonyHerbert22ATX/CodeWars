
// #... Always Positive... Always number.. no funny businesss
// string if a Disarium !!.. || Not !!


function disariumNumber(n){
  let arrNum = [...String(n)].map((num,i)=> (+num) ** (i+1)).reduce((a,c)=> a + c, 0)
  return (arrNum === n)? 'Disarium !!' : 'Not !!'
}




console.log(disariumNumber(89));
console.log(disariumNumber(564));
console.log(disariumNumber(1024));
console.log(disariumNumber(135));
console.log(disariumNumber(136586));