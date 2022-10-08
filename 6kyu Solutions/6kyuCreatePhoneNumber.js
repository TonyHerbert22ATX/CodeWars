function createPhoneNumber(numbers){
  let digits = numbers.splice(3)
  return `(${numbers.join('')}) ${digits.slice(0,3).join('')}-${digits.slice(-4).join('')}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));