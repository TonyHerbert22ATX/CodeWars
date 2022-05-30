function position(letter) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let position = alphabet.indexOf(letter) + 1;
  return `Position of alphabet: ${position}`;
}

console.log(position("a"));
