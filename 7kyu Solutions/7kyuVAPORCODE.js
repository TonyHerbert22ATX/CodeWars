// string... Always a string... No #'s... Special Char OKAY

// return sting as V A P O R W A V E -> converts all letters to uppercase & ads 2 spaces.



function vaporcode(string){
    // string condensed UPPERCASE together 
    let upperCase = string.toUpperCase().split(' ').join('')
    // run a loop, creating new string with 2 spaces between each letter
    let result = ''
    for(let letter of upperCase){
        result += letter + '  '
    }
    return result.trim()
}


console.log(vaporcode('Lets go to the movies'), 'L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S');