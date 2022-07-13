function whoseMove(lastPlayer, win) {
    return lastPlayer === "black" && win === true
        ? "black"
        : lastPlayer === "black" && win === false
        ? "white"
        : lastPlayer === "white" && win === true
        ? 'white'
        :'black'
}


console.log(whoseMove("black", false));
console.log(whoseMove("black", true));