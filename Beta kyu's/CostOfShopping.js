const shoppingList = function (items) {
  let total = 0
  items.forEach(item => total += item.price)
  return total;
};

console.log(shoppingList([
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
  ]));
