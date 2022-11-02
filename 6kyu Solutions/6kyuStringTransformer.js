// String. CHANGE Based on input.... Always be a sting.. No funny business. Only english & spaces


// String opposite cases. reverse order of words

// * This is first pass.
// let stringTransformer = (str) => {
//     // change str to array
//     let strArr = [...str]
//     // change case of every character.. Lower -> Upper vis versa
//     let changeCase = strArr.map((letter)=> {
//         if(letter === letter.toUpperCase()){
//             return letter.toLowerCase()
//         }else{
//             return letter.toUpperCase()
//         }
//     })
//     // join letter to original words
//     let words = changeCase.join('')
//     // change string to array
//     let newStrArr = words.split(' ')
//     //reverse words in array
//     let reverseOrder = newStrArr.reverse()
//     return reverseOrder.join(' ')
// }

let stringTransformer = (str) => {
    return [...str].map((letter)=> {
        if(letter === letter.toUpperCase()){
            return letter.toLowerCase()
        }else{
            return letter.toUpperCase()
        }
    }).join('').split(' ').reverse().join(' ')
}


console.log(stringTransformer('Example string'), 'STRING eXAMPLE');