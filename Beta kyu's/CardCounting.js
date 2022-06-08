function cc(card) {
    let total = 0;
    for (let i = 0; i < card.length; i++) {
        if (
            card[i] === 2 ||
            card[i] === 3 ||
            card[i] === 4 ||
            card[i] === 5 ||
            card[i] === 6
        ) {
            total += 1;
        } else if (card[i] === 7 || card[i] === 8 || card[i] === 9) {
            total += 0;
        } else if (
            card[i] === 10 ||
            card[i] === "J" ||
            card[i] === "Q" ||
            card[i] === "K" ||
            card[i] === "A"
        ) {
            total -= 1;
        }
    }
    return total > 0 ? `${total} Bet` : `${total} Hold`;
}

console.log(cc([2, 3, 4, 5, 6]));
console.log(cc([2, 7, 4, "Q"]));
console.log(cc([2, "K", 4, "Q", "A"]));
