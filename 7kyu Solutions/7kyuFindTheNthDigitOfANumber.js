var findDigit = function (num, nth) {
    if (nth <= 0) return -1;
    return String(Math.abs(num)).length < nth
        ? 0
        : +String(num)
              .split("")
              .reverse()
              .slice(nth - 1, nth)
              .join("");
};

console.log(findDigit(5673, 4));
console.log(findDigit(129, 2));
console.log(findDigit(-2825, 3));
console.log(findDigit(-456, 4));
console.log(findDigit(0, 20));
console.log(findDigit(65, 0));
console.log(findDigit(24, -8));
