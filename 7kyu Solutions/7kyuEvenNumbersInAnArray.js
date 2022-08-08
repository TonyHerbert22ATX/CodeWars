function evenNumbers(array, number) {
    let even = array.filter((e,i)=> e % 2 === 0)
    return even.slice(even.length - number)
}


console.log(evenNumbers([1,2,3,4,5,6,7,8,9], 3));
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));