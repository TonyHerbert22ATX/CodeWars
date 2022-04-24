function warnTheSheep(queue) {
  let re = queue.reverse();
  let w = re.indexOf("wolf");
  return re[0] === "wolf"
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${w}! You are about to be eaten by a wolf!`;
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
console.log(
  warnTheSheep([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
    "sheep",
  ])
);
// console.log(mouthSize("ant bear"));
// console.log(mouthSize("alligator"));
