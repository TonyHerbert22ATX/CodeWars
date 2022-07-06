const isReallyNaN = (val) => {
    return val != val;
};

console.log(isReallyNaN(37));
console.log(isReallyNaN("37"));
console.log(isReallyNaN(NaN));
console.log(isReallyNaN(undefined));
console.log(isReallyNaN(null));
console.log(isReallyNaN());
console.log(isReallyNaN({}));
console.log(isReallyNaN([]));
