class Ship {
    constructor(draft, crew) {
        this.draft = draft;
        this.crew = crew;
        this.isWorthIt = function () {
            if(this.draft - this.crew * 1.5 > 20){
                return true
            }else{
                return false
            }
        };
    }
}



let emptyShip = new Ship(0, 0);
let t = new Ship(15, 10);
console.log(emptyShip);
console.log(t);
console.log(t.isWorthIt());
