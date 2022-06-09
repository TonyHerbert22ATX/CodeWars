function armstrong(number) {
    if (typeof number == "string" || number < 0) return false;
    if (number == 0 || number == 1) return true;

    let num = String(number);
    let sum = Number(num[0] ** 3) + Number(num[1] ** 3) + Number(num[2] ** 3);
    return sum === number ? true : false;
}

console.log(armstrong(371));
console.log(armstrong(372));
console.log(armstrong(1));
console.log(armstrong(-2));
console.log(armstrong("371"));
console.log(armstrong(""));