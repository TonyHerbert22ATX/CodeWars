function maxDiff(list) {
    if(list.length <= 1) return 0
    let sort = list.sort((a,z)=> a -z)
    return sort.slice(-1) - sort[0]
}

console.log(maxDiff([0, 1, 2, 3, 4, 5]));
console.log(maxDiff([]));
console.log(maxDiff([16]));
