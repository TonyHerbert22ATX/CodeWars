function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((a,c)=> a + +c, 0)
}


console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));