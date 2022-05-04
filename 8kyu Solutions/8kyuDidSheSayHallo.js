function validateHello(greetings) {
  return greetings.match(/hello|ciao|salut|hallo|hola|ahoj|czesc/gi)?true:false
}

console.log(validateHello("ahoj"));
console.log(validateHello("meh"));
