function DNAtoRNA(dna) {
  let rna = dna.split('')
  for(let i = 0; i < rna.length; i++){
    if(rna[i] === 'T'){
      rna[i] = 'U'
    }
  }
  return rna.join('')
}

console.log(DNAtoRNA('TTTT'))
console.log(DNAtoRNA('GCAT'))
console.log(DNAtoRNA('GACCGCCGCC'))
// console.log(max([5]))
