String.prototype.toJadenCase = function () {
    let a = this.split(" ");
    let arr = a.map((x) => {
        let first = x[0].toUpperCase();
        let rest = x.slice(1, x.length);
        return `${first}${rest}`;
    });
    return arr.join(" ");
};

let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
