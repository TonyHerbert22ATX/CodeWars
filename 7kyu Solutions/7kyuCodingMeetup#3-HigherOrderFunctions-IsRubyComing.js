var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

var list2 = [
    {
        firstName: "Sofia",
        lastName: "I.",
        country: "Argentina",
        continent: "Americas",
        age: 35,
        language: "Java",
    },
    {
        firstName: "Lukas",
        lastName: "X.",
        country: "Croatia",
        continent: "Europe",
        age: 35,
        language: "Python",
    },
];

function isRubyComing(list) {
    for(let dev of list){
        if (dev.language === "Ruby") {
            return true
        }
    }
    return false
}


console.log(isRubyComing(list1));
console.log(isRubyComing(list2));