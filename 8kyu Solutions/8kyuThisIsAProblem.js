function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + " " + this.lastName 
}

let n = new NameMe ('John', 'Doe')
console.log(n.firstName);
console.log(n.lastName);
console.log(n.name);