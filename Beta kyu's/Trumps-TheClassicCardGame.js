
function checkWinner(playerCard, opponentCard, statIdx) {
    const player = playerCard.stats[statIdx];
    const opponent = opponentCard.stats[statIdx];
    if (player === undefined || opponent === undefined) {
        return "invalid";
    }
    if (player > opponent) {
        return "player";
    }
    if (player < opponent) {
        return "opponent";
    }
    return "tie";
}

