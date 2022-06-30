function isValid(formula) {
    if (formula.includes(7) || formula.includes(8)) {
        if (formula.includes(1) && formula.includes(2)) {
            return false;
        }
        if (formula.includes(3) && formula.includes(4)) {
            return false;
        }
        if (formula.includes(5) && formula.includes(6)) {
            return true;
        }
        if (formula.includes(5) && !formula.includes(6)) {
            return false;
        }
        if (!formula.includes(5) && formula.includes(6)) {
            return false;
        }
        return true;
    }
    return false;
}

console.log(isValid([1, 3, 7]));
// t;
console.log(isValid([1, 3, 7, 2]));
// f;
console.log(isValid([1, 3, 7, 5]));
// f;
console.log(isValid([1, 5, 6, 7, 3]));
// t;
console.log(isValid([5, 6, 7, 8]));
// t;
console.log(isValid([5, 6, 7]));
// t;
console.log(isValid([5, 6, 7, 8]));
// t;
console.log(isValid([6, 7, 8]));
// f;
console.log(isValid([7, 8]));
// t;
