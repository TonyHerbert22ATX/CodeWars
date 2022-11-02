// string of words.... english letters... no special, funny business. 

// an array of words... sorted alphabeticlaly by final char
// 2 same last letter... show in order appearence. 



function last(string){
    // find last char in string words & sort
        return string.split(' ').sort((a,z)=> {
            if(a[a.length - 1] > z[z.length - 1]){
                return 1
            }else if(a[a.length - 1] < z[z.length - 1]){
                return -1
            }else{
                return 0
            }
        })
}





console.log(last('man i need a taxi up to ubud'), `['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']`);
