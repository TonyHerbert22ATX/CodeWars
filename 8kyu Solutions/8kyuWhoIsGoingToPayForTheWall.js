function whoIsPaying(name) {
    let short = name[0] + name[1];
    return name.length <= 2 ? [name] : [name, short];
}

console.log(whoIsPaying("Mexico"));
console.log(whoIsPaying("Melissa"));
console.log(whoIsPaying("Me"));
console.log(whoIsPaying("I"));
console.log(whoIsPaying(""));
