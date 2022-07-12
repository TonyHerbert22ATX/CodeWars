function tripleTrouble(one, two, three) {
    let solution = []
    for(let i = 0; i < one.length; i++){
        solution.push(one[i])
        solution.push(two[i]);
        solution.push(three[i]);
    }
    return solution.join('')
}


console.log(tripleTrouble('aaa','bbb','ccc'));