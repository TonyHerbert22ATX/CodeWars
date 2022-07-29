function movie(card, ticket, perc) {
    let a = ticket;
    let b = card + ticket * perc;
    if (b < a) return 2;
    let count = 1;
    let previous = ticket * perc;
    while (Math.ceil(b) > a) {
        count++;
        a += ticket;
        previous *= perc;
        b += previous;
    }
    return Math.ceil(b) === a ? count + 1 : count;
}

console.log(movie(500, 15, 0.9));
console.log(movie(100, 10, 0.95));

console.log(movie(0, 10, 0.95));
console.log(movie(586404, 8, 0.29));


