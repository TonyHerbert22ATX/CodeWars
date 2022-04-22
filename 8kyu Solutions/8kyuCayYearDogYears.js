var humanYearsCatYearsDogYears = function (humanYears) {
  let arr = [humanYears, 15, 15];
  if (humanYears >= 2) {
    arr[1] += 9;
    arr[2] += 9;
  }
  if (humanYears >= 3) {
    arr[1] += (humanYears - 2) * 4;
    arr[2] += (humanYears - 2) * 5;
  }
  return arr
};

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(3));
console.log(humanYearsCatYearsDogYears(10));
