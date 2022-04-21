function howMuchILoveYou(nbPetals) {
  let arr = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  for (let i = 0; i <= nbPetals; i++) {
    arr.push(arr[i]);
  }
  return arr[nbPetals - 1];
}

console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(228));
console.log(howMuchILoveYou(12));
