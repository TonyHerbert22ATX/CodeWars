

function killer(suspectInfo, dead) {
    for (let name in suspectInfo) {
    if (dead.every(deadPerson => suspectInfo[name].includes(deadPerson))) {
      return name;
    }
  }
}



console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']), 'James')
console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'kyle']), 'James')