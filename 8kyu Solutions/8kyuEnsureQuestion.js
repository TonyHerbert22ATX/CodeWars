function ensureQuestion(s) {
  let arr = s.split('')
  let q = ['?']
  if(arr[arr.length-1] === '?'){
    return arr.join('')
  }else{
    return arr.concat(q).join('')
  }
}


console.log(ensureQuestion("yes"));
console.log(ensureQuestion("no"));
console.log(ensureQuestion("no?"));
