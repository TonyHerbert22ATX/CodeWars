function validateCode(code) {
    return (code.toString()[0]>3)?false:true
}

console.log(validateCode(123));
console.log(validateCode(8));