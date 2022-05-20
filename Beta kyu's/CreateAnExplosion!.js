function boomIntensity(n) {
  let o = "o";
  let b = "B";
  let m = "m";
  let boom = "";
  
  if (n > 2) {
    boom = b.concat(o.repeat(n), m);
  } else {
    return "boom";
  }

  if (n % 2 === 0 && n % 5 === 0) {
    return boom.toUpperCase() + "!";
  } else if (n % 2 === 0) {
    return boom + "!";
  } else if (n % 5 === 0) {
    return boom.toUpperCase();
  } else {
    return boom;
  }
}

console.log(boomIntensity(6));
console.log(boomIntensity(4));
console.log(boomIntensity(1));
console.log(boomIntensity(5));
console.log(boomIntensity(10));
console.log(boomIntensity(19));
