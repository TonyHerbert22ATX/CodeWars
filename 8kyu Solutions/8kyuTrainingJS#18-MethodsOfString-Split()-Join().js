function splitAndMerge(string, separator) {
  let final = [];
  let word = string.split(" ").forEach((x) => {
    final.push(x.split("").join(separator));
  });
  return final.join(" ");
}

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("My name is John", "-"));
console.log(splitAndMerge("My name is John", "."));
console.log(splitAndMerge("My name is John", ","));
