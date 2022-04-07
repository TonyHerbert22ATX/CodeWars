function countPositivesSumNegatives(input) {
  let sumOfPositive = 0;  
  let sumOfNegative = 0; 
  
  if(input == null || input.length < 1) {
    return [];
    } else {
      input.map(item => {
        if(item > 0) {
          sumOfPositive++;
        } else if(item < 0) {
          sumOfNegative += item;
        } else {
          return []
        }
      })
    }
  return [sumOfPositive, sumOfNegative]
}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))   
console.log(countPositivesSumNegatives([0,0]))   




