class Ghost {
    constructor() {
        let num = Math.random();

        this.color =
            num < 0.25
                ? "white"
                : num < 0.5
                ? "yellow"
                : num < 0.75
                ? "purple"
                : "red";
    }
}

console.log(new Ghost());
