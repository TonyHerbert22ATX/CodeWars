function DNAStrand(dna) {
    let arr = []
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A") arr.push('T');
        if (dna[i] === "T") arr.push("A");
        if (dna[i] === "G") arr.push("C");
        if (dna[i] === "C") arr.push("G");
    }
    return arr.join('')
}

console.log(DNAStrand("ATTGC"));
