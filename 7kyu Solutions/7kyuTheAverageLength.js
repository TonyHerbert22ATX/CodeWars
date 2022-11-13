function averageLength() { 
    let average = Math.round(arguments[0].map(s=>s.length).reduce((a,c)=> a + c, 0) / arguments[0].length)
    return arguments[0].map(s => s.slice(0,1).repeat(average))
}

console.log(averageLength(['u','y']))
console.log(averageLength(['aa','bb','cccc']))
console.log(averageLength(['aa','bb','ddd','eee']))