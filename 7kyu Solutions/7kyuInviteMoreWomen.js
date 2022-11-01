// array of integers.... always a #. No funny business.
// -1 women... 1 man

// T||F 


function inviteMoreWomen(L){
    // break down into 2 group (man & women)
    let woman = L.filter((num)=> num < 0).length
    let man = L.filter((num)=> num > 0).length
    return man > woman 
}


console.log(inviteMoreWomen([1,-1,1]), 'true');
console.log(inviteMoreWomen([1,1,1]), 'true');
console.log(inviteMoreWomen([-1,-1,-1]), 'false');
console.log(inviteMoreWomen([1,-1]), 'false');