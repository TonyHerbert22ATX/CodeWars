class Person {
    constructor(
        firstName = "John",
        lastName = "Doe",
        age = 0,
        gender = "Male"
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    sayFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    static greetExtraTerrestrials(raceName){
        return `Welcome to Planet Earth ${raceName}`
    }
}

console.log(new Person("Tony", "Herbert", 31, "male").firstName);
console.log(new Person("Tony", "Herbert", 31, "male").sayFullName());
console.log(new Person("Tony", "Herbert", 31, "male").greetExtraTerrestrials('Martians'));
console.log(
    new Person().greetExtraTerrestrials("Martians")
);

