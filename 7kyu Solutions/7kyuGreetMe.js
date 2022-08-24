var greet = function (name) {
    return `Hello ${name[0].toUpperCase()}${name.toLowerCase().substring(1)}!`;
};

console.log(greet("tony"));
