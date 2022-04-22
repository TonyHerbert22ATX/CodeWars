function well(x) {
  let total = 0;
  let arr = x.map((x) => {
    if (x === "good") {
      total += 1;
    }
  });
  console.log(total);
  if (total > 2) {
    return "I smell a series!";
  } else if (total === 1 || total === 2) {
    return 'Publish!';
  }else {
    return 'Fail!'
  }
}

console.log(well(["bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad"]));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));
