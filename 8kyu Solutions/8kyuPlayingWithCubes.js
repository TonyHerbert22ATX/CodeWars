// This Cube function needs help
// change the constructor so that it can take an integer for the side or no args

class Cube {
    constructor(n = 0) {
        this.setSide(n);
    }
    getSide() {
        return this.side;
    }
    setSide(n) {
        this.side = Math.abs(n);
    }
}

let c = new Cube(10);
console.log(c);
console.log(c.getSide());

let c2 = new Cube();
console.log(c2);
console.log(c2.getSide());
