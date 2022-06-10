function sortCollection(array) {
    if (array === undefined || array === null || array.length === []) {
        return array;
    }
    array.sort((a, z) => {
        const difference = z.rating - a.rating;
        if (difference === 0) {
            return a.film.localeCompare(z.film);
        }
        return z.rating - a.rating;
    });
    return array;
}

console.log(
    sortCollection([
        { film: "Nausicaa of the Valley of the Wind", rating: 7 },
        { film: "Whisper of the Heart", rating: 6 },
        { film: "Spirited Away", rating: 8 },
        { film: "Kiki's Delivery Service", rating: 7 },
        { film: "Castle in the Sky", rating: 7 },
    ])
);
