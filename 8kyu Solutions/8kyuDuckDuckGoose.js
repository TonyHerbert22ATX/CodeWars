class Player {
    constructor(name) {
        this.name = name;
    }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players, goose) {
    let circle = goose;
    while (players.length < circle) {
        circle -= players.length;
    }
    return players[circle - 1].name;
}



console.log(duckDuckGoose(players, 1));
console.log(duckDuckGoose(players, 3));
console.log(duckDuckGoose(players, 10));
console.log(duckDuckGoose(players, 20));
console.log(duckDuckGoose(players, 30));
console.log(duckDuckGoose(players, 18));
console.log(duckDuckGoose(players, 28));
