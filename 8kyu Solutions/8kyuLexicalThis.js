var people = [
    ["bob", "john"],
    ["bob", "john", "dave"],
    [],
    ["bob", "john", "dave", "matt", "alex"],
];

var Person = function () {
    var person = {
        _name: "Leroy",
        _friends: [],
        fillFriends(f) {
            person._friends = f
        },
    };
    return person;
};

console.log(Person());
console.log(Person().fillFriends(people));
console.log(Person()._friends);


