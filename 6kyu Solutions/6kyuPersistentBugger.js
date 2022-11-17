function persistence(num) {
      let count = 0
   if(num < 10) return count
   while(num > 9){
    num  = String(num).split('').reduce((a,c)=> +a * +c , 1)
    count++
   }
   return count
}


console.log(persistence(4))
console.log(persistence(39))
console.log(persistence(999))