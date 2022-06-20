function Dog(breed) {
    this.breed = breed;
    this.bark = function () {
        return "Woof";
    };
}

let snoopy = new Dog("Beagle");

let scoobydoo = new Dog("Great Dane");

console.log(snoopy.bark());
console.log(scoobydoo.bark());