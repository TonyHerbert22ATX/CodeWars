// 2nd Try

function sumStr(a,b) {
let total = Number(a) + Number(b)
  // creates a new variable and converts to total(number) to a string
  let strTotal = total.toString()
  console.log(strTotal);
}

sumStr('4','5');
sumStr('34','5');
sumStr('','');
sumStr('2','');
sumStr('-5','3');




// 1st Try

function sumStr(a,b) {
//   This takes the first Number string and converts to a integer
  let numA = Number(a)
//   This takes the second Number string and converts to a integer
  let numB = Number(b)
  // declares new total variable & adds the numbers together
  let total = numA + numB;
  // creates a new variable and converts to total(number) to a string
  let strTotal = total.toString()
  return (strTotal);
}

sumStr('4','5');
sumStr('34','5');
sumStr('','');
sumStr('2','');
sumStr('-5','3');