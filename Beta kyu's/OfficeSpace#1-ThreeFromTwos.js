function musicalOCD(volume) {
    let i = 0;
    do {
        i = i + 1;
        volume = volume + 2;
    } while (volume % 3 !== 0);
    return i
}

console.log(musicalOCD(4));
console.log(musicalOCD(12));
