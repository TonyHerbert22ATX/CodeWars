function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode) {
        return false;
    } else {
        return Date.parse(currentDate) <= Date.parse(expirationDate);
    }
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"));
console.log(checkCoupon("123a", "123", "July 9, 2015", "July 9, 2015"));
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"));
