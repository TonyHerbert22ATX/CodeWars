function Person(myName) {
    this.name = myName
    this.greet = function (yourName) {
        return "Hello " + yourName + ", my name is " + myName;
    };
}

let joe = new Person("Joe");
console.log(joe.greet("Kate"));
console.log(joe.name);
