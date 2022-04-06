function abbrevName(name){
  let arr = name.split(' ')
  let first = arr[0].split('').shift()
  let last = arr[arr.length - 1].split('').shift()
  let combineName = `${first}.${last}`
  return combineName.toUpperCase()
}

console.log(abbrevName('Sam Harris'))
console.log(abbrevName('P Cole'))


