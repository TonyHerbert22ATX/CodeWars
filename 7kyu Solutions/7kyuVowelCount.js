function getCount(str) {
  let vowelsCount = 0;
  let arr = str.toLowerCase().replace(/ /g, "").split('')
  console.log(arr);
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u'){
        vowelsCount++
      }
    }
  return vowelsCount;
}


console.log(getCount('abracadabra'))
console.log(getCount('o a kak ushakov lil vo kashu kakao'))
// console.log(getCount(''))
// console.log(getCount(''))



