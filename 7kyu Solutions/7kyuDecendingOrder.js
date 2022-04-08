function descendingOrder(n){
  let reverse = +n.toString().split('').sort((a,b)=> b-a).join('')
  return reverse
}

console.log(descendingOrder(121)) 
console.log(descendingOrder(15))   
console.log(descendingOrder(123456789))   




