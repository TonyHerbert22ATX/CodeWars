function billboard(name, price = 30) {
  return name.length/(1/price)
}

console.log(billboard('Tony Herbert'));
console.log(billboard("James Madison"));
console.log(billboard("Sean Scott", 20));
