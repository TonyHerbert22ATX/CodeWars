function calculateAge(birthYear, yearRelation) {
  let age = 0;
  if (birthYear < yearRelation) {
    age = yearRelation - birthYear;
    if (age > 1) {
      return `You are ${age} years old.`;
    } else {
      return `You are ${age} year old.`;
    }
  } else if (birthYear > yearRelation) {
    age = birthYear - yearRelation;
    if (age > 1) {
      return `You will be born in ${age} years.`;
    } else {
      return `You will be born in ${age} year.`;
    }
  } else {
    return "You were born this very year!";
  }
}

console.log(calculateAge(2012, 2016));
console.log(calculateAge(2000, 1990));
console.log(calculateAge(2000, 2000));
