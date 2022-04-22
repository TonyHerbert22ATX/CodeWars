class Ball {
  constructor(ballType) {
    if (ballType === undefined) {
      this.ballType = "regular";
    } else {
      this.ballType = "super";
    }
  }
}

console.log(new Ball());
console.log(new Ball('super'));
// console.log(well(["good", "bad", "bad", "bad", "bad"]));
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));
