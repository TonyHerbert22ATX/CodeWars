// take a number and a multiple... Always be integer. Always positive.

// array ... the multiples of n  times m




function multiples(m,n){
    let arrayAnswer = []
    for(let i = 1; i <= m ; i++){
        arrayAnswer.push(n * i)
    }
    return arrayAnswer
}



console.log(multiples(3,5), '[5,10,15]')