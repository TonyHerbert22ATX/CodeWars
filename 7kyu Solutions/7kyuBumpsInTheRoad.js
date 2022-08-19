function bump(x) {
    return x.replace(/_/g, '').length > 15 ? 'Car Dead' : 'Woohoo!'
}


console.log(bump("n"));
console.log(bump('_nnnnnnn_n__n______nn__nn_nnn'));