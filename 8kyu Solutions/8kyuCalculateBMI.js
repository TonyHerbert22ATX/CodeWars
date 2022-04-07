function bmi(weight, height) {
  let BMI = weight / Math.pow(height, 2)
  if(BMI <= 18.5){
    return 'Underweight'
  }else if(BMI <= 25){
    return 'Normal'
  }else if (BMI <= 30){
    return 'Overweight'
  }else if(BMI > 30){
    return 'Obese'
  }
}


console.log(bmi(80,1.80))
console.log(bmi())
console.log(bmi())



