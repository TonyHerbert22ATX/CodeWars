function openOrSenior(data) {
    let arr = data.map((data) => {
        if (data[0] >= 55 && data[1] > 7) {
            return "Senior";
        } else {
            return "Open";
        }
    });
    return arr;
}

console.log(
    openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20],
    ])
);
