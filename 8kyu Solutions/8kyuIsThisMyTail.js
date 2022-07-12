function correctTail(body, tail) {
    let sub = body.substr(body.length - tail.length);
    return (sub === tail)? true : false
}


console.log(correctTail('Fox','x'));
console.log(correctTail("dogg", "g"));
console.log(correctTail("Rhino", "o"));
console.log(correctTail("Meerkat", "t"));
console.log(correctTail("Jmgmjczeijarzbxrjga", "k"));
