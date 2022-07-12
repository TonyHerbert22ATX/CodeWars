class Dog {
    constructor(name, age, gender, species, size, master, loyal) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.species = species;
        this.legs = 4;
        this.size = size;
        this.master = master;
        this.loyal = loyal;
    }
}

class Labrador extends Dog {
    constructor(name, age, gender, master) {
        super(name, age, gender, 'Labrador', 'Large', master, true);
    }
}

var spitsy = new Labrador("Spitsy", 10, "Male", "Donald");

console.log(spitsy.name);
console.log(spitsy.age);
console.log(spitsy.gender);
console.log(spitsy.master);
console.log(spitsy.species);
console.log(spitsy.loyal);

var edward = new Labrador("Edward", 3, "Male", "Emma");
console.log(edward.name);
console.log(edward.master);
