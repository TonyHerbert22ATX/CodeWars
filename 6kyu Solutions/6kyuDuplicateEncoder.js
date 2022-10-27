// String -> new String  ... SPEC ok.. no # || empty... ignore Capitalization 

// '(' if unique char || ')' if char > 1


function duplicateEncode(string){
    let result = ''
    // find char code for each character in string
    let charInsideString = string.split('').map((char)=> char.toLowerCase().charCodeAt())
    // Loop string and see if char is unique
    for(let i = 0; i < string.length; i++){
        if(charInsideString.filter((index)=> index === charInsideString[i]).length > 1){
            result += ')'
        }else{
            result += '('
        }
    }
    return result
}



        // let regEx = new RegExp(lowerCaseString[i],'g')
        // if(lowerCaseString.match(regEx).length === 1){
        //     result+= '('
        // }else{
        //     result+= ')'
        // }
    

console.log(duplicateEncode('din'),"(((");
console.log(duplicateEncode('recede'),"()()()");
console.log(duplicateEncode('Success'),")())())");
console.log(duplicateEncode('(( &'),"))((");