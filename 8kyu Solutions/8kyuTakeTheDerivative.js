function derive(coefficient, exponent) {
  let multiply = coefficient * exponent
  let minus = exponent - 1
  return `${multiply}x^${minus}`
}

console.log(derive(7,8));
