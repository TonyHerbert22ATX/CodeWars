class God {
    /**
     * @returns Human[]
     */
    static create() {
        return [new Man(), new Woman()];
    }
}

class Human {}
class Man extends Human {}
class Woman extends Human {}

console.log(new God());
console.log(new Human());
console.log(new Man());
console.log(new Woman());
