function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}

console.log(mouthSize("toucan"));
console.log(mouthSize("ant bear"));
console.log(mouthSize("alligator"));
