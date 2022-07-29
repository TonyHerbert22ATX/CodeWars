let alphabet = "abcdefghijklmnopqrstuvwxyz";
// ! The below solution would not work. It said that map is not a function.... I used a different solution to do a loop
// function addLetters(letters) {
//     let num = letters[0]
//         .map((x) => alphabet.indexOf(x) + 1)
//         .reduce((a, c) => a + c, -1);
//     console.log(num);
//     if (num > 26) {
//         num -= 26;
//         return l[num];
//     } else {
//         return l[num];
//     }
// }
// ? I had to make sure to add the spread ... syntax on the argument to work in Codewars
function addLetters(letters) {
    let amount = 25;

    for (let letter of letters) {
        amount += alphabet.indexOf(letter) + 1;
    }
    return alphabet[amount % 26];
}


console.log(addLetters(["a", "b", "c"]));
console.log(addLetters(["y", "c", "b"]));
