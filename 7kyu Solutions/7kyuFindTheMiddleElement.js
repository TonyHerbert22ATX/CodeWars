function gimme(triplet) {
    let sort = [...triplet].sort((a,z)=> a-z)[1]
    return triplet.indexOf(sort)
}

console.log(gimme([2, 3, 1]));
console.log(gimme([5, 10, 14]));
