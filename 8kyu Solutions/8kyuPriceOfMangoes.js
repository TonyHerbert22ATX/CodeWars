function mango(quantity, price) {
  let free = Math.floor(quantity / 3);
  return (quantity - free) * price
}


console.log(mango(3, 3));
console.log(mango(9, 5));
