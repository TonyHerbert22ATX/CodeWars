function magNumber(info) {
  let bullets = info[1] * 3;

  if (info[0] === "PT92") {
    return Math.ceil(bullets / 17);
  } else if (info[0] === "M4A1") {
    return Math.ceil(bullets / 30);
  } else if (info[0] === "PSG1") {
    return Math.ceil(bullets / 5);
  } else if (info[0] === "M16A2") {
    return Math.ceil(bullets / 30);
  }
}

console.log(magNumber(["PT92", 6]));
console.log(magNumber(["M4A1", 8]));
console.log(magNumber(["PSG1", 31]));
console.log(magNumber(["M16A2", 19]));
