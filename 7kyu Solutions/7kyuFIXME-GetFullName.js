class Dinglemouse {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        if(this.firstName === '' && this.lastName !== ''){
            return this.lastName
        }else if (this.firstName === "" && this.lastName === ""){
            return ''
        }else if (this.firstName !== "" && this.lastName === ""){
            return this.firstName
        }
            return this.firstName + " " + this.lastName;
    }
}

console.log(new Dinglemouse("Clint", "Eastwood").getFullName());
console.log(new Dinglemouse("", "Eastwood").getFullName());
console.log(new Dinglemouse("Clint", "").getFullName());
console.log(new Dinglemouse("", "").getFullName());
