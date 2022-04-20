function correct(string) {
  return string.split('0').join('O').split('1').join('I').split('5').join('S')
}

console.log(correct("L0ND0N"));
console.log(correct("DUBL1N"));
console.log(correct("51NGAP0RE"));
// console.log(correct(25));
// console.log(correct(74));
