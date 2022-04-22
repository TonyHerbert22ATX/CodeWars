function capitalizeWord(word) {
  let cap = word[0].toUpperCase();
  let rest = word.substring(1, word.length);
  return cap + rest;
}

console.log(capitalizeWord("word"));
console.log(capitalizeWord("i"));
