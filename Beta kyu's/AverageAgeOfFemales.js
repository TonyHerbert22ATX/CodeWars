function averageFemale(list) {
  console.log(list);
  let sum = 0;
  let count = 0;
  list.forEach((person) => {
    if (person.gender === "female") {
      sum += person.age;
      count++;
    }
  });
  if (count === 0) {
    return 0
    }
  return sum / count
}

console.log(
  averageFemale([
    { name: "Sarah", gender: "female", age: 25 },
    { name: "Tom", gender: "male", age: 18 },
    { name: "Tim", gender: "male", age: 65 },
  ])
);
