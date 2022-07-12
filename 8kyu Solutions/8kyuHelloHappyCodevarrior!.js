function Warrior(n) {
    let name = n;
    this.name = function (n) {
        return n ? (name = n) : name;
    };
}

Warrior.prototype.toString = function () {
    return "Hi! my name's " + this.name();
};

var albert = new Warrior("Albert");
var boris = new Warrior("Boris");

console.log(albert.toString());
console.log(albert.name());
console.log(boris.name());
boris.name("Bobo");
console.log(boris.name());
