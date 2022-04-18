function getGrade(s1, s2, s3) {
  let averageGrade = (s1 + s2 + s3) / 3;
  if (averageGrade >= 90) {
    return "A";
  } else if (averageGrade < 90 && averageGrade >= 80) {
    return "B";
  } else if (averageGrade < 80 && averageGrade >= 70) {
    return "C";
  } else if (averageGrade < 70 && averageGrade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(82, 85, 87));
console.log(getGrade(58, 62, 70));
// console.log(rps("paper", "rock"));
// console.log(rps("rock", "rock"));
